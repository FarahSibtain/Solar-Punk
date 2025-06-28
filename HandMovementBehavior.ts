import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, Observable, useOnBeforeRender } from "@zcomponent/core";
import { XRRigVR as XRRigVR } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { Vector3, Quaternion, Euler, Camera } from "three";
import { XRContext } from '@zcomponent/three-webxr/lib';
import { XRController } from '@zcomponent/three-webxr/lib/components/XRController';
import { useCamera, Object3D } from "@zcomponent/three";
import * as THREE from 'three';
import { XRHandJoint } from "@zcomponent/three-webxr/lib/components/XRHandJointTransform";
import Scene from './XRRigVR/XRRigVR.zcomp';

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
		     
        const camPosition = new THREE.Vector3();
        this.camera.getWorldPosition(camPosition);

        // Get world positions of controllers
        const leftLocalPos = new THREE.Vector3();
        const rightLocalPos = new THREE.Vector3();

        const invCamWorldMatrix = new THREE.Matrix4();
        invCamWorldMatrix.copy(this.camera.matrixWorld);
        invCamWorldMatrix.invert();

        
        if (this.leftHandObject?.element && this.leftController.isTracking) {

            const leftToCamMatrix = invCamWorldMatrix.clone().multiply(this.leftHandObject.element.matrixWorld);
            leftLocalPos.applyMatrix4(leftToCamMatrix);
			this.leftHandPosition = leftLocalPos;

        } else {
            console.warn("Left controller not found!");
        }

        
        if (this.rightHandObject?.element && this.rightController.isTracking) {

            const rightToCamMatrix = invCamWorldMatrix.clone().multiply(this.rightHandObject.element.matrixWorld);
            rightLocalPos.applyMatrix4(rightToCamMatrix);
			this.rightHandPosition = rightLocalPos;

        } else {
            console.warn("Right controller not found!");
        }

		// Only consider hands tracked if they have valid positions (not at origin) and are actually tracking
		const leftHandValid = this.leftHandObject?.element && this.leftController.isTracking && this.leftHandPosition.lengthSq() > 0.01; // Minimum distance from origin
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
		    const cameraPosition = new Vector3();
			this.camera.getWorldPosition(cameraPosition);
			const leftHandWorldPosition = new Vector3();
			this.leftHandObject.element.getWorldPosition(leftHandWorldPosition);
			const rightHandWorldPosition = new Vector3();
			this.rightHandObject.element.getWorldPosition(rightHandWorldPosition);

			const handsCenter = new Vector3();
			handsCenter.addVectors(leftHandWorldPosition, rightHandWorldPosition).multiplyScalar(0.5);
			const direction = new Vector3();
			direction.subVectors(handsCenter, cameraPosition);
			direction.setY(0);
		    direction.normalize();
		    return direction;
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
