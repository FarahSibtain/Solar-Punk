import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, useAudioContext } from "@zcomponent/core";
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
	private audioBuffer: AudioBuffer | null = null;
	private audioContext: AudioContext;
		

	constructor(contextManager: ContextManager, instance: Button_zcomp, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		// Initialize audio context
		this.audioContext = useAudioContext(contextManager);
		
		// Load the audio file
		this.loadAudioFile();
	
		/*
		// You can register handlers for events on the node that this behavior
		// is attached to like this:this.loadAudioFile();

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
			
			// Get the button's text content
			const buttonName = this.instance.text.value;
			
			console.log('Button clicked:', buttonName);
			
			// Check if button name is "student" and play audio
			if (buttonName.toLowerCase() === "student") {
				this.playAudio();
				console.log('Button clicked2:', buttonName);
				//this.loadAudioFile('./AudioFiles/Placeholder_Audio.mp3');
			}
			
			// Toggle between two messages
			/*uiButton.text.value = 
				uiButton.text.value === "Button" 
				? "Button was clicked!" 
				: "Button";*/
		});
	}

	private async loadAudioFile() {
		try {
			const audioUrl = new URL('./AudioFiles/Placeholder_Audio.mp3', import.meta.url);
			const response = await fetch(audioUrl);
			const arrayBuffer = await response.arrayBuffer();
			this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
			//this.playAudio();
		} catch (error) {
			console.error('Error loading audio file:', error);
		}
	}

	private playAudio() {
		if (this.audioBuffer && this.audioContext) {
			const source = this.audioContext.createBufferSource();
			source.buffer = this.audioBuffer;
			source.connect(this.audioContext.destination);
			source.start();
		}
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(MyButtonBehaviour);
