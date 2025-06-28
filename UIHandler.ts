import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, useOnBeforeRender } from "@zcomponent/core";
import { useCamera } from "@zcomponent/three";
import { Group as Group } from "@zcomponent/three/lib/components/Group";
import { default as Scene} from "./Scene.zcomp";
import * as THREE from "three";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents three/Object3D/Group/Group
 **/
export class UIHandler extends Behavior<Group> {

	protected zcomponent = this.getZComponentInstance(Scene);
	private cam: THREE.Camera;
	private uiDest: Group;
	private isDisabled: boolean = false;

	constructor(contextManager: ContextManager, instance: Group, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);
        
        this.cam = useCamera(contextManager).value;

		this.uiDest = this.zcomponent.nodeByLabel.get('UIDest') as Group;
		
		// Store original visibility for disable/restore functionality

		// Register for frame updates to log positions
        this.register(useOnBeforeRender(contextManager), (deltaTime) => {
            this.updateCanvas(deltaTime);
        });
    }

    private updateCanvas(deltaTime: number) {
		// Only update UI position if not disabled
		if (!this.isDisabled) {
			// Check if uiDest exists and has element before proceeding
			if (!this.uiDest || !this.uiDest.element) {
				console.warn('UIDest node not found or element not available');
				return;
			}
			
			const position = new THREE.Vector3();
			this.uiDest.element.getWorldPosition(position);
			// Fix lerp calculation - deltaTime is in milliseconds, normalize to seconds
			this.instance.element.position.lerp(position, 0.003 * (deltaTime));
			this.cam.getWorldPosition(position);
			this.instance.element.lookAt(position);
		}
	}

	public disableUI() {
		if (!this.isDisabled) {
			this.isDisabled = true;
			this.instance.enabled.value = false;
			this.instance.visible.value = false;
		}
	}

	public enableUI() {
		if (this.isDisabled) {
			this.isDisabled = false;
			this.instance.enabled.value = true;
			this.instance.visible.value = true;
		}
	}

	public isEnabled(): boolean {
		return !this.isDisabled;
	}

	dispose() {
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
registerBehaviorRunAtDesignTime(UIHandler);
