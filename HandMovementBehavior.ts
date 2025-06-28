import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, Observable, useOnBeforeRender } from "@zcomponent/core";
import { XRRigVR as XRRigVR } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { Vector3, Quaternion, Euler, Camera } from "three";
import { XRContext } from '@zcomponent/three-webxr/lib';
import { XRController } from '@zcomponent/three-webxr/lib/components/XRController';
import { useCamera, Object3D } from "@zcomponent/three";
import * as THREE from 'three';
import { XRHandJoint } from "@zcomponent/three-webxr/lib/components/XRHandJointTransform";
import Scene from './Scene.zcomp';

interface ConstructionProps {
	/**
	 * @zui
	 * @zdefault "swimming"
	 * @ztype select
	 * @zvalues ["swimming"]
	 */
	movementType?: string;

	/**
	 * @zui
	 * @zdefault 2.0
	 * @zgroup "Movement Settings"
	 */
	movementSpeed?: number;

	/**
	 * @zui
	 * @zdefault true
	 * @zgroup "Movement Settings"
	 */
	enableHandTracking?: boolean;

	/**
	 * @zui
	 * @zdefault 0.1
	 * @zgroup "Movement Settings"
	 */
	deadZoneThreshold?: number;
}

/**
 * @zbehavior 
 * @zparents hand-tracking
 * @zparents locomotion
 **/
export class HandMovementBehavior extends Behavior<XRRigVR> {

	/**
	 * @zui
	 * @zdefault true
	 */
	public enabled = new Observable(true);

	/**
	 * @zui
	 * @zdefault [0, 0, 0]
	 * @zgroup "Debug"
	 */
	public currentVelocity = new Observable<[number, number, number]>([0, 0, 0]);

	// Internal state
	private leftHandPosition = new Vector3();
	private rightHandPosition = new Vector3();
    private leftHandObject: Object3D;
    private rightHandObject: Object3D;
	private leftHandRotation = new Quaternion();
	private rightHandRotation = new Quaternion();
	private previousLeftHandPosition = new Vector3();
	private previousRightHandPosition = new Vector3();
	private movementVector = new Vector3();
	private xrContext: XRContext;
    private leftController: XRController;
    private rightController: XRController;
	private camera: THREE.Camera;
	private bothHands: boolean;
	private isInitialized = false;
	private initializationFrames = 0;
	private readonly INITIALIZATION_FRAMES_REQUIRED = 30; // Wait 30 frames before starting movement
	
	// Reusable objects to avoid garbage collection
	private tempVector1 = new Vector3();
	private tempVector2 = new Vector3();
	private tempMatrix = new THREE.Matrix4();
	private frameCount = 0;
	private readonly UPDATE_FREQUENCY = 2; // Update every 2 frames to reduce CPU load

	constructor(contextManager: ContextManager, instance: XRRigVR, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		this.xrContext = contextManager.get(XRContext);
		
		this.camera = useCamera(this.contextManager).value;
		const sceneInstance = this.getZComponentInstance(Scene);
        this.leftHandObject = sceneInstance.nodes.LeftHandPosition;
        this.rightHandObject = sceneInstance.nodes.RightHandPosition;
        this.leftController = sceneInstance.nodes.Left_Controller;
        this.rightController = sceneInstance.nodes.Right_Controller;

        // Initialize movement vector to zero
        this.movementVector.set(0, 0, 0);

		// Set up frame-by-frame updates
		this.register(useOnBeforeRender(this.contextManager), (deltaTime) => {
			if (!this.enabled.value) return;
			
			// Reduce update frequency to improve performance
			this.frameCount++;
			if (this.frameCount % this.UPDATE_FREQUENCY !== 0) {
				// Still apply movement even when not updating tracking
				if (this.isInitialized) {
					this.applyMovement(deltaTime / 1000);
				}
				return;
			}
			
			this.updateHandTracking();
			
			// Handle initialization period
			if (!this.isInitialized) {
				if (this.bothHands) {
					this.initializationFrames++;
					if (this.initializationFrames >= this.INITIALIZATION_FRAMES_REQUIRED) {
						this.isInitialized = true;
						console.log("Hand tracking initialized - movement enabled");
					}
				} else {
					// Reset initialization if hands are lost
					this.initializationFrames = 0;
				}
				// Ensure no movement during initialization
				this.movementVector.set(0, 0, 0);
				return;
			}
			
			if (this.bothHands) {
				this.processMovement(deltaTime / 1000);
				this.applyMovement(deltaTime / 1000);
			} else {
				// No hands detected - stop movement
				this.movementVector.multiplyScalar(0.8); // Quick dampening when hands lost
				if (this.movementVector.lengthSq() < 0.001) {
					this.movementVector.set(0, 0, 0);
				}
				this.applyMovement(deltaTime / 1000);
			}
		});
	}


	private updateHandTracking() {
        // Reuse temp vectors to avoid garbage collection
        this.camera.getWorldPosition(this.tempVector1); // camPosition

        // Get world positions of controllers using reusable objects
        this.tempMatrix.copy(this.camera.matrixWorld);
        this.tempMatrix.invert(); // invCamWorldMatrix

        if (this.leftHandObject?.element && this.leftController.isTracking) {
            // Reuse tempMatrix for calculations
            this.tempMatrix.multiply(this.leftHandObject.element.matrixWorld);
            this.tempVector2.set(0, 0, 0).applyMatrix4(this.tempMatrix); // leftLocalPos
			this.leftHandPosition.copy(this.tempVector2);
            
            // Restore invCamWorldMatrix for right hand calculation
            this.tempMatrix.copy(this.camera.matrixWorld).invert();
        }

        if (this.rightHandObject?.element && this.rightController.isTracking) {
            this.tempMatrix.multiply(this.rightHandObject.element.matrixWorld);
            this.tempVector2.set(0, 0, 0).applyMatrix4(this.tempMatrix); // rightLocalPos
			this.rightHandPosition.copy(this.tempVector2);
        }

		// Only consider hands tracked if they have valid positions (not at origin) and are actually tracking
		const leftHandValid = this.leftHandObject?.element && this.leftController.isTracking && this.leftHandPosition.lengthSq() > 0.01;
		const rightHandValid = this.rightHandObject?.element && this.rightController.isTracking && this.rightHandPosition.lengthSq() > 0.01;
		this.bothHands = leftHandValid && rightHandValid;
	}

	private processMovement(deltaTime: number) {
		const movementType = this.constructorProps.movementType ?? "swimming";
		const speed = this.constructorProps.movementSpeed ?? 2.0;
		const threshold = this.constructorProps.deadZoneThreshold ?? 0.01;

		switch (movementType) {
			case "swimming":
				this.processSwimmingMovement(speed, threshold, deltaTime);
				break;
		}

		// Update debug velocity display
		this.currentVelocity.value = [
			this.movementVector.x,
			this.movementVector.y,
			this.movementVector.z
		];
	}

	private processSwimmingMovement(speed: number, threshold: number, deltaTime: number) {
        const handDistance = this.leftHandPosition.distanceToSquared(this.rightHandPosition);
		
		if (handDistance < threshold) {
			const influence = (threshold - handDistance) / threshold;
			const direction = this.getMovementDirection();
			
			this.movementVector.copy(direction).multiplyScalar(speed * influence);
		} else {
			// Hands not close enough - gradually reduce movement
			this.movementVector.multiplyScalar(0.95);
			if (this.movementVector.lengthSq() < 0.001) {
				this.movementVector.set(0, 0, 0);
			}
		}
	}

	private applyMovement(deltaTime: number) {
		if (this.movementVector.length() === 0) return;

		// Apply movement to the XR rig
		this.movementVector.clampLength(0, 3);
		const currentPosition = this.xrContext.offsetPosition.value;
		const newPosition: [number, number, number] = [
			currentPosition[0] + this.movementVector.x * deltaTime,
			currentPosition[1] + this.movementVector.y * deltaTime,
			currentPosition[2] + this.movementVector.z * deltaTime
		];

		this.xrContext.offsetPosition.value = newPosition;

		// Dampen movement vector
		this.movementVector.multiplyScalar(0.99);
		if (this.movementVector.lengthSq() < 0.001) this.movementVector.set(0, 0, 0);
	}

	/**
	 * Helper method to get movement direction based on head orientation
	 */
	private getMovementDirection(): Vector3 {
		if (this.camera) {
		    this.camera.getWorldPosition(this.tempVector1); // cameraPosition
			this.leftHandObject.element.getWorldPosition(this.tempVector2); // leftHandWorldPosition
			
			// Get right hand position and calculate center
			this.rightHandObject.element.getWorldPosition(this.tempVector1); // Reuse tempVector1
			this.tempVector2.add(this.tempVector1).multiplyScalar(0.5); // handsCenter
			
			// Calculate direction from camera to hands center
			this.camera.getWorldPosition(this.tempVector1); // Get camera position again
			this.tempVector2.sub(this.tempVector1); // direction = handsCenter - cameraPosition
			this.tempVector2.setY(0);
		    this.tempVector2.normalize();
		    return this.tempVector2;
		}
		
		return new Vector3(0, 0, -1); // Default forward direction
	}

	dispose() {
		// Clean up any resources
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(HandMovementBehavior);
