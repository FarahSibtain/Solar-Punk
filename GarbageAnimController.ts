import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, started } from "@zcomponent/core";
import { Group as Group } from "@zcomponent/three/lib/components/Group";
import Scene from "./Scene.zcomp";
import Box from "./GrabbableFlop.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents three/Object3D/Group/Group
 **/
export class GarbageAnimController extends Behavior<Group> {

	protected zcomponent = this.getZComponentInstance(Scene);
	

	constructor(contextManager: ContextManager, instance: Group, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		// Start animations when the experience begins
		started(this.contextManager).then(() => {
			// Start the Wobble animation (attached to Garbage node)
			this.zcomponent.animation.layers.Wobble.clips.Wobble0.play({ loop: true });
			
			// Start the GarbagePath animation (Collection movement)
			this.zcomponent.animation.layers.GarbagePath.clips.GP.play({ loop: true });			
		});

		// Get the Box component instance using entityByID
		const boxEntity = this.zcomponent.entityByID.get('c142570ec5ec46a0a190e6faa99ea252') as Box;
		
		if (boxEntity && boxEntity.nodes) {
			// Stop wobble animation when object is grabbed  
			this.register(boxEntity.nodes.RigidbodyEventEmitter.onGrab, () => {
				this.zcomponent.animation.layers.Wobble.clips.Wobble0.pause();
			});

			// Resume wobble animation when object is released
			this.register(boxEntity.nodes.RigidbodyEventEmitter.onRelease, () => {
				this.zcomponent.animation.layers.Wobble.clips.Wobble0.play({ loop: true });
			});
		}

		/*
		// You can register handlers for events on the node that this behavior
		// is attached to like this:

		this.register(this.instance.onPointerDown, evt => {
			// Code to handle event
		});

		// Or against other nodes in your zcomp file
		this.register(this.zcomponent.nodes.MyNode.onPointerDown, evt => {

		});
		
		*/
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(GarbageAnimController);
