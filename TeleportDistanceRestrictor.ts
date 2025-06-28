import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, Observable, useOnBeforeRender } from "@zcomponent/core";
import { TeleportManager as TeleportManager } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { useCamera } from "@zcomponent/three";
import { XRContext } from '@zcomponent/three-webxr/lib';
import { Vector3 } from "three";

interface ConstructionProps {
	/**
	 * Maximum teleportation distance in units
	 * @zui
	 * @zdefault 2
	 * @ztype number
	 */
	maxDistance?: number;
}

/**
 * @zbehavior 
 **/
export class TeleportDistanceRestrictor extends Behavior<TeleportManager> {

	/**
	 * Maximum teleportation distance in units
	 * @zui
	 * @zdefault 2
	 */
	public maxDistance = new Observable(2);

	private xrContext: XRContext;
	private startPosition = new Vector3();
	private currentPosition = new Vector3();
	private isInitialized = false;

	constructor(contextManager: ContextManager, instance: TeleportManager, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		// Set the max distance from constructor props
		this.maxDistance.value = this.constructorProps.maxDistance ?? 2;

		// Get reference to XR Context
		this.xrContext = contextManager.get(XRContext);

		// Initialize starting position once we have the XR rig
		if (this.xrContext && this.xrContext.offsetPosition) {
			const pos = this.xrContext.offsetPosition.value;
			this.startPosition.set(pos[0], pos[1], pos[2]);
			this.isInitialized = true;
		}

		// Monitor position changes every frame
		this.register(useOnBeforeRender(this.contextManager), () => {
			if (!this.isInitialized && this.xrContext && this.xrContext.offsetPosition) {
				// Initialize starting position if not done yet
				const pos = this.xrContext.offsetPosition.value;
				this.startPosition.set(pos[0], pos[1], pos[2]);
				this.isInitialized = true;
				return;
			}

			if (this.isInitialized && this.xrContext && this.xrContext.offsetPosition) {
				const pos = this.xrContext.offsetPosition.value;
				this.currentPosition.set(pos[0], pos[1], pos[2]);

				// Calculate horizontal distance from start position
				const startPos2D = new Vector3(this.startPosition.x, 0, this.startPosition.z);
				const currentPos2D = new Vector3(this.currentPosition.x, 0, this.currentPosition.z);
				const distance = startPos2D.distanceTo(currentPos2D);

				// If distance exceeds maximum, clamp it
				if (distance > this.maxDistance.value) {
					// Calculate direction vector (only X and Z)
					const direction = currentPos2D.clone().sub(startPos2D);
					direction.normalize();
					
					// Set position to maximum allowed distance
					const clampedPosition2D = startPos2D.clone().add(
						direction.multiplyScalar(this.maxDistance.value)
					);
					
					// Update XR rig position to clamped position (keep current Y)
					this.xrContext.offsetPosition.value = [
						clampedPosition2D.x, 
						this.currentPosition.y, 
						clampedPosition2D.z
					];
				}
			}
		});

		// Add debug logging to see if events are firing
		this.register(this.instance.onTeleportStart, () => {
		});

		this.register(this.instance.onTeleportEnd, () => {
		});
	}

	dispose() {
		// Clean up any resources
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(TeleportDistanceRestrictor);
