import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { Audio as Audio } from "@zcomponent/core/lib/components/Audio";
import { default as Scene} from "./Scene.zcomp";

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

		 // Assuming you have a reference to an Audio component
        this.register(this.instance.onEnded, () => {
            // Do something when audio ends
            console.log('Audio playback finished!');
            
            // Make UI visible and start fade-in animation
            this.zcomponent.nodes.UI.visible.value = true;
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
