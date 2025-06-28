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
        //const sceneInstance = this.getZComponentInstance(Scene);
        this.cam = useCamera(contextManager).value;

		this.uiDest = this.zcomponent.nodeByLabel.get('UIDest') as Group;

		// Register for frame updates to log positions
        this.register(useOnBeforeRender(contextManager), (deltaTime) => {
            this.updateCanvas(deltaTime);
        });
    }

    private updateCanvas(deltaTime: number) {
		// Get UIDest node with proper null checking
		
		// Check if uiDest exists and has element before proceeding
		if (!this.uiDest || !this.uiDest.element) {
			console.warn('UIDest node not found or element not available');
			return;
		}
		
		const position = new THREE.Vector3();
		this.uiDest.element.getWorldPosition(position);
		this.instance.element.position.lerp(position, 0.003 * deltaTime);
		this.cam.getWorldPosition(position);
		this.instance.element.lookAt(position);
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
registerBehaviorRunAtDesignTime(UIHandler);
