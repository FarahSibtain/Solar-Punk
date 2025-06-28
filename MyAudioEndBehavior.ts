import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { Audio as Audio } from "@zcomponent/core/lib/components/Audio";
import { default as Scene} from "./Scene.zcomp";
import { UIHandler } from "./UIHandler";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents core/audio
 **/
export class MyAudioEndBehavior extends Behavior<Audio> {

	protected zcomponent = this.getZComponentInstance(Scene);
		

	constructor(contextManager: ContextManager, instance: Audio, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		const uiHandler = this.zcomponent.nodes.UI.getBehavior(UIHandler);
		uiHandler?.disableUI();

		 // Assuming you have a reference to an Audio component
        this.register(this.instance.onEnded, () => {
            // Make UI visible and start fade-in animation
            uiHandler?.enableUI();
            this.zcomponent.animation.layers.UI_Animations.clips.UI_FadeIn.play();
        });
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(MyAudioEndBehavior);
