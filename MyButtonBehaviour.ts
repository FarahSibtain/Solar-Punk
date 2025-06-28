import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, useAudioContext } from "@zcomponent/core";
import { default as Button_zcomp } from "./Button/Button.zcomp";
import Scene from "./Scene.zcomp";

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
			console.log('Attempting to load audio from:', urlAudio);
			console.log('Resolved URL:', audioUrl.href);
			console.log('Base URL (import.meta.url):', import.meta.url);
			
			const response = await fetch(audioUrl);
			
			if (!response.ok) {
				console.error(`HTTP Error: ${response.status} ${response.statusText}`);
				console.error('Full response:', response);
				throw new Error(`Failed to fetch audio file: ${response.status} ${response.statusText} - Path: ${urlAudio}`);
			}
			
			const arrayBuffer = await response.arrayBuffer();
			
			if (arrayBuffer.byteLength === 0) {
				throw new Error('Audio file is empty');
			}
			
			console.log('Audio file loaded successfully, size:', arrayBuffer.byteLength, 'bytes');
			this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
			this.playAudio(isNextAudio);
		} catch (error) {
			console.error('? Error loading audio file:', error);
			console.error('? Attempted file path:', urlAudio);
			console.error('? Possible issues:');
			console.error('   1. File does not exist at the specified path');
			console.error('   2. File path is incorrect (check case sensitivity)');
			console.error('   3. File is not in the project directory');
			console.error('   4. File extension or name mismatch');
			
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
					console.log('Playing next audio...');
					this.hasPlayedNext = true;
					this.playNextAudio();
				} else {
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
