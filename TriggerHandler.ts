import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, useAudioContext } from "@zcomponent/core";
import { CubeTrigger as CubeTrigger } from "@zcomponent/three/lib/components/physics/triggers/CubeTrigger";
import { default as Scene} from "./Scene.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 **/
export class TriggerHandler extends Behavior<CubeTrigger> {

	protected zcomponent = this.getZComponentInstance(Scene);
	private audioContext: AudioContext;
	private audioBuffer: AudioBuffer | null = null;
		

	constructor(contextManager: ContextManager, instance: CubeTrigger, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		// Initialize audio context
		this.audioContext = useAudioContext(contextManager);
		
		// Load the audio file
		this.loadAudio();
		
		this.register(this.instance.onCollisionEnter, (collisionEvent) => {
			console.log("I'm here");
			this.playAudio();
		});
	}

	private async loadAudio() {
		try {
			// Reference the audio file using the correct URL format
			const audioUrl = new URL('./zapsplat_nature_underwater_ambience_deep_007_30532.mp3', import.meta.url);
			
			// Fetch the audio file
			const response = await fetch(audioUrl);
			const arrayBuffer = await response.arrayBuffer();
			
			// Decode the audio data
			this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
			console.log('Audio loaded successfully');
		} catch (error) {
			console.error('Error loading audio:', error);
		}
	}

	private playAudio() {
		if (!this.audioBuffer) {
			console.warn('Audio not loaded yet');
			return;
		}

		try {
			// Create a buffer source
			const source = this.audioContext.createBufferSource();
			source.buffer = this.audioBuffer;
			
			// Connect to the audio context destination (speakers)
			source.connect(this.audioContext.destination);
			
			// Play the audio
			source.start(0);
			console.log('Playing audio');
		} catch (error) {
			console.error('Error playing audio:', error);
		}
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
 registerBehaviorRunAtDesignTime(TriggerHandler);
