import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, useAudioContext } from "@zcomponent/core";
import { default as Button_zcomp } from "./Button/Button.zcomp";
import { Cleaner } from "./Cleaner";
import Scene from "./Scene.zcomp";
import { UIHandler } from "./UIHandler";

interface ConstructionProps {
    /** 
     * @zui
     * @zdefault "./AudioFiles/Placeholder_Audio.mp3"
     * @zvalues files *.+(mp3|wav|ogg)
     */
    audioFileUrl: string;
	  /** 
     * @zui
     * @zdefault "./AudioFiles/Placeholder_Audio.mp3"
     * @zvalues files *.+(mp3|wav|ogg)
     */
	audioFileUrl2: string;
}

/**
 * @zbehavior 
 **/
export class MyButtonBehaviour extends Behavior<Button_zcomp> {

	protected zcomponent = this.getZComponentInstance(Scene);
	private audioBuffer: AudioBuffer | null = null;
	private audioContext: AudioContext;
	private constructorProps: ConstructionProps;
	private isPlaying: boolean = false;
	private hasPlayedNext: boolean = false;

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

			const uiHandler = this.zcomponent.nodes.UI.getBehavior(UIHandler);
			uiHandler?.disableUI();

			
			// Check if button name is "student" and play audio
			if (constructorProps.audioFileUrl.length != 0) {
				//this.zcomponent.nodes.UI.visible.value = false;
				// Reset state for new button click
				this.resetPlaybackState();
				this.loadAudioFile(constructorProps.audioFileUrl);
			}
			
			// Toggle between two messages
			/*uiButton.text.value = 
				uiButton.text.value === "Button" 
				? "Button was clicked!" 
				: "Button";*/
		});
	}

	private async loadAudioFile(urlAudio: string, isNextAudio: boolean = false) {
		try {
			// Prevent multiple simultaneous audio loading
			if (this.isPlaying && !isNextAudio) {
				console.log('Audio already playing, skipping...');
				return;
			}

			// Use proper URL format for bundler detection
			const audioUrl = new URL(urlAudio, import.meta.url);
			
			const response = await fetch(audioUrl);
			
			if (!response.ok) {
				throw new Error(`Failed to fetch audio file: ${response.status} ${response.statusText} - Path: ${urlAudio}`);
			}
			
			const arrayBuffer = await response.arrayBuffer();
			
			if (arrayBuffer.byteLength === 0) {
				throw new Error('Audio file is empty');
			}
			
			this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
			this.playAudio(isNextAudio);
		} catch (error) {
			
			// Don't try to play next audio if there was an error loading it
			if (isNextAudio) {
				console.log('Failed to load next audio, stopping sequence');
				this.resetPlaybackState();
			}
		}
	}

	private playAudio(isNextAudio: boolean = false) {
		if (this.audioBuffer && this.audioContext) {
			const source = this.audioContext.createBufferSource();
			source.buffer = this.audioBuffer;
			source.connect(this.audioContext.destination);
			
			this.isPlaying = true;
			
			// Register onended event to play another audio when current audio finishes
			source.onended = () => {
				console.log('Audio ended');
				this.isPlaying = false;
				
				// Only play next audio if this is the first audio (not the next one)
				// This prevents infinite recursion
				if (!isNextAudio && !this.hasPlayedNext) {
					// First audio finished
					console.log('Playing next audio...');
					this.hasPlayedNext = true;
					this.playNextAudio();
					
					// Trigger garbage cleanup in the scene
					const cleaner = this.zcomponent.nodeByLabel.get('Cleaner') as Cleaner;
					cleaner.clean();
				} else {
					// Second audio finished
					console.log('Audio sequence completed');
					this.resetPlaybackState();
				}
			};
			
			source.start();
		}
	}

	private async playNextAudio() {
		try {
				this.resetPlaybackState();
				this.loadAudioFile(this.constructorProps.audioFileUrl2, true);
			}
			 catch (error) {				
				console.log('? Path not found 2nd audioclip');
			}	
	}

	private resetPlaybackState() {
		this.isPlaying = false;
		this.hasPlayedNext = false;
		console.log('Playback state reset');
	}

	dispose() {
		
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(MyButtonBehaviour);
