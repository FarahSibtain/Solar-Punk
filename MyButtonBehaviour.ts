import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, useAudioContext } from "@zcomponent/core";
import { default as Button_zcomp } from "./Button/Button.zcomp";
//import { default as Scene} from "./UIElements.zcomp";

interface ConstructionProps {
    /** 
     * @zui
     * @zdefault "./AudioFiles/Placeholder_Audio.mp3"
     * @zvalues files *.+(mp3|wav|ogg)
     */
    audioFileUrl: string;
}

/**
 * @zbehavior 
 **/
export class MyButtonBehaviour extends Behavior<Button_zcomp> {

	//protected zcomponent = this.getZComponentInstance(Scene);
	private audioBuffer: AudioBuffer | null = null;
	private audioContext: AudioContext;
	private constructorProps: ConstructionProps;
	private audioSources: AudioBufferSourceNode[] = []; // Track active audio sources

	constructor(contextManager: ContextManager, instance: Button_zcomp, constructorProps: ConstructionProps) {
		super(contextManager, instance);
		this.constructorProps = constructorProps;

		// Initialize audio context
		this.audioContext = useAudioContext(contextManager);
		
		// Load the audio file
		//this.loadAudioFile();
	
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
			//const scene = this.getZComponentInstance(Scene);
			
			// Get the button's text content
			const buttonName = this.instance.text.value;
			
			console.log('Button clicked:', buttonName);
			
			// Check if button name is "student" and play audio
			if (constructorProps.audioFileUrl.length != 0) {				
				this.loadAudioFile(constructorProps.audioFileUrl);
			}
			
			// Toggle between two messages
			/*uiButton.text.value = 
				uiButton.text.value === "Button" 
				? "Button was clicked!" 
				: "Button";*/
		});
	}

	private async loadAudioFile(urlAudio : string) {
		try {
			const audioUrl = urlAudio;
			const response = await fetch(audioUrl);
			const arrayBuffer = await response.arrayBuffer();
			this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
			this.playAudio();
		} catch (error) {
			console.error('Error loading audio file:', error);
		}
	}

	private playAudio() {
		if (this.audioBuffer && this.audioContext) {
			const source = this.audioContext.createBufferSource();
			source.buffer = this.audioBuffer;
			source.connect(this.audioContext.destination);
			
			// Track the source and clean up when it ends
			this.audioSources.push(source);
			source.onended = () => {
				const index = this.audioSources.indexOf(source);
				if (index > -1) {
					this.audioSources.splice(index, 1);
				}
			};
			
			source.start();
		}
	}

	dispose() {
		// Stop and clean up any active audio sources
		this.audioSources.forEach(source => {
			try {
				source.stop();
			} catch (e) {
				// Source may already be stopped
			}
		});
		this.audioSources = [];
		
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(MyButtonBehaviour);
