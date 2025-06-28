import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, useOnBeforeRender } from "@zcomponent/core";
import { Group as Group } from "@zcomponent/three/lib/components/Group";
import { XRContext } from '@zcomponent/three-webxr/lib';
import { Vector3 } from 'three';
import { default as Scene} from "./Scene.zcomp";
import { UIHandler } from "./UIHandler";

interface ConstructionProps {
	// Movement threshold - how much movement triggers the disable
	movementThreshold?: number;
}

/**
 * @zbehavior 
 * @zparents three/Object3D/Group/Group
 **/
export class DisableOnMove extends Behavior<Group> {

	protected zcomponent = this.getZComponentInstance(Scene);
	private xrContext: XRContext;
	private uiHandler: UIHandler | undefined;

	constructor(contextManager: ContextManager, instance: Group, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		// Get reference to XR Context
		this.xrContext = contextManager.get(XRContext);

		// Find the UIHandler to disable
		this.findUIHandler();

		// Monitor position changes every frame
		this.register(useOnBeforeRender(this.contextManager), () => {
			if (this.xrContext && this.xrContext.offsetPosition && this.uiHandler && this.uiHandler.isEnabled()) {
				const pos = this.xrContext.offsetPosition.value;
				const distanceMovedSq = new Vector3(pos[0], pos[1], pos[2]).lengthSq();
				const threshold = this.constructorProps.movementThreshold ?? 0.2;
				
				if (distanceMovedSq > threshold) {
					// Disable the UIHandler
					this.uiHandler.disableUI();
					this.enabled.value = false;
				}
			}
		});
	}

	private findUIHandler() {
		this.uiHandler = this.instance.getBehavior(UIHandler);
		
		if (!this.uiHandler) {
			console.warn('DisableOnMove: No UIHandler found to disable');
		}
	}

	dispose() {
		return super.dispose();
	}
}
