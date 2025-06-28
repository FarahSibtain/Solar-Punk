import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, started } from "@zcomponent/core";
import { Group as Group } from "@zcomponent/three/lib/components/Group";
import Scene from "./Scene.zcomp";

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
			this.zcomponent.animation.layers.GarbagePath.clips.GP0.play({ loop: true });
		});

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
