import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { default as Button_zcomp } from "./Button/Button.zcomp";
import { default as Scene} from "./Scene.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 **/
export class MyButtonBehaviour extends Behavior<Button_zcomp> {

	//protected zcomponent = this.getZComponentInstance(Scene);
		

	constructor(contextManager: ContextManager, instance: Button_zcomp, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		/*
		// You can register handlers for events on the node that this behavior
		// is attached to like this:

		// Or against other nodes in your zcomp file
		this.register(this.zcomponent.nodes.MyNode.onPointerDown, evt => {

		});
		
		*/
		this.register(this.instance.onClick, () => {
			// Get the scene instance
			const scene = this.getZComponentInstance(Scene);
			
			// Change the text of the "Hello Text" component
			const uiButton = scene.nodes.Button;
			
			// Toggle between two messages
			uiButton.text.value = 
				uiButton.text.value === "Button" 
				? "Button was clicked!" 
				: "Button";
		});
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(MyButtonBehaviour);
