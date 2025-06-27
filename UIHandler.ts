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
		

	constructor(contextManager: ContextManager, instance: Group, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

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

        
        // Get reference to the ZComponent instance to access controllers
        const sceneInstance = this.getZComponentInstance(Scene);
        this.cam = useCamera(contextManager).value;

		// Register for frame updates to log positions
        this.register(useOnBeforeRender(contextManager), (deltaTime) => {
            this.updateCanvas(deltaTime);
        });
    }

    private updateCanvas(deltaTime: number) {
		const dest = this.zcomponent.nodes.UIDest;
		const position = new THREE.Vector3();
		dest.element.getWorldPosition(position);
		this.instance.element.position.lerp(position, 0.003 * deltaTime);
		this.cam.getWorldPosition(position);
		this.instance.element.lookAt(position);
0		//this.instance.element.position.copy(this.instance.element.position.lerpVectors(this.instance.element.position, this.cam.position , 0.1));
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
registerBehaviorRunAtDesignTime(UIHandler);
