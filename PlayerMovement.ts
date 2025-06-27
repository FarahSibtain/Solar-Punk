import { Behavior, ContextManager, useOnBeforeRender } from '@zcomponent/core';
import { Object3D, useCamera, useScene } from '@zcomponent/three';
import { XRContext } from '@zcomponent/three-webxr/lib';
import { WalkManager } from '@zcomponent/three-webxr/lib/components/WalkManager';
import { XRController } from '@zcomponent/three-webxr/lib/components/XRController';
import * as THREE from 'three';
import { Vector3 } from 'three';
import Scene from './Scene.zcomp';

/** @zbehavior */
export class PlayerMovement extends Behavior {
    private leftHandPosition: Object3D;
    private rightHandPosition: Object3D;
    private scene: THREE.Scene;
    private lastCamPosition: THREE.Vector3;
    private lastLeftPosition: THREE.Vector3;
    private lastRightPosition: THREE.Vector3;
    private hadLeftPosition: boolean = false;
    private hadRightPosition: boolean = false;
    private xrContext: XRContext;
    private cam: THREE.Camera;
    private box: Object3D;
    private sphere: Object3D;

    private leftController: XRController;
    private rightController: XRController;

    private walkManager: WalkManager;

    private velocity: THREE.Vector3 = new THREE.Vector3();
    private drag: number = 0.99;
    private speed: number = 20;
    private maxSpeed = 0.5;

    constructor(contextManager: ContextManager, instance: any) {
        super(contextManager, instance);

        // Get the scene instance
        this.scene = useScene(contextManager);
        
        // Get reference to the ZComponent instance to access controllers
        const sceneInstance = this.getZComponentInstance(Scene);
        this.leftHandPosition = sceneInstance.nodes.LeftHandPosition;
        this.rightHandPosition = sceneInstance.nodes.RightHandPosition;
        this.cam = useCamera(contextManager).value;

        this.leftController = sceneInstance.nodes.Left_Controller;
        this.rightController = sceneInstance.nodes.Right_Controller;

        this.box = sceneInstance.nodes.Box;
        this.sphere = sceneInstance.nodes.Sphere;

        this.xrContext = contextManager.get(XRContext);
        this.walkManager = sceneInstance.nodes.WalkManager;

        // Register for frame updates to log positions
        this.register(useOnBeforeRender(contextManager), (deltaTime) => {
            this.updateMovement(deltaTime);
        });
    }

    private updateMovement(deltaTime: number) {
        
        const camPosition = new THREE.Vector3();
        this.cam.getWorldPosition(camPosition);

        // Get world positions of controllers
        const leftLocalPos = new THREE.Vector3();
        const rightLocalPos = new THREE.Vector3();
        
        const leftDelta = new THREE.Vector3();
        const rightDelta = new THREE.Vector3();

        const invCamWorldMatrix = new THREE.Matrix4();
        invCamWorldMatrix.copy(this.cam.matrixWorld);
        invCamWorldMatrix.invert();
        
        if (this.leftHandPosition?.element && this.leftController.isTracking) {

            //this.leftHandPosition.element.getWorldPosition(leftLocalPos);
            //leftLocalPos.sub(this.lastCamPosition);

            const leftToCamMatrix = invCamWorldMatrix.clone().multiply(this.leftHandPosition.element.matrixWorld);
            leftLocalPos.applyMatrix4(leftToCamMatrix);

            if (this.hadLeftPosition)
                leftDelta.subVectors(leftLocalPos, this.lastLeftPosition);

            this.hadLeftPosition = true;
            this.lastLeftPosition = leftLocalPos.clone();
        } else {
            console.warn("Left controller not found!");
            this.hadLeftPosition = false;
        }

        
        if (this.rightHandPosition?.element && this.rightController.isTracking) {

            //this.rightHandPosition.element.getWorldPosition(rightLocalPos);
            //rightLocalPos.sub(this.lastCamPosition);

            const rightToCamMatrix = invCamWorldMatrix.clone().multiply(this.rightHandPosition.element.matrixWorld);
            rightLocalPos.applyMatrix4(rightToCamMatrix);

            if (this.hadRightPosition)
                rightDelta.subVectors(rightLocalPos, this.lastRightPosition);

            this.hadRightPosition = true;
            this.lastRightPosition = rightLocalPos.clone();
        } else {
            console.warn("Right controller not found!");
            this.hadRightPosition = false;
        }

        ///////////////////////////////////

        // Skalieren der Deltas
        const influence = leftLocalPos.distanceToSquared(rightLocalPos);
        leftDelta.multiplyScalar(influence);
        rightDelta.multiplyScalar(influence);

        this.box.element?.position.setY(influence);

        const combinedDelta = new THREE.Vector3();
        combinedDelta.addVectors(leftDelta, rightDelta);
        const factor = -this.speed * deltaTime;
        combinedDelta.multiplyScalar(factor);

        if (combinedDelta.length() > 0.01)
        {
            this.velocity.add(combinedDelta);
            this.velocity.multiplyScalar(this.drag);
            this.velocity = this.velocity.clampLength(0, this.maxSpeed);

            this.xrContext.offsetPosition.value = [
                this.xrContext.offsetPosition.value[0] + combinedDelta.x * 0.01,
                this.xrContext.offsetPosition.value[1],
                this.xrContext.offsetPosition.value[2] + combinedDelta.z * 0.01
            ]

            //this.xrContext.offsetPosition.value[0] += combinedDelta.x * 0.1;
            //this.xrContext.offsetPosition.value[1] += 0;
            //this.xrContext.offsetPosition.value[2] += combinedDelta.z * 0.1;

            //this.sphere.element?.position.copy(camPosition.clone().add(combinedDelta.clone().multiplyScalar(3)));
        }


        this.lastCamPosition = camPosition.clone();

    }
}