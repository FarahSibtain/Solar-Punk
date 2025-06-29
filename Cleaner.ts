import { ContextManager, Observable, registerLoadable } from "@zcomponent/core";
import { Group } from "@zcomponent/three/lib/components/Group";
import * as THREE from "three";
import Scene from "./Scene.zcomp";

interface ConstructorProps {
    /**
     * Parent group containing objects to disable/hide when cleaning
     * @zui
     * @zvalues nodeids
     */
    objectsToDisable?: string;
    
    /**
     * Parent group containing objects to enable/show when cleaning
     * @zui
     * @zvalues nodeids
     */
    objectsToEnable?: string;
    
    /**
     * Delay between each object animation in milliseconds
     * @zui
     * @zdefault 100
     */
    animationDelay?: number;
}

/**
 * @zcomponent
 * @zicon favorite
 */
export class Cleaner extends Group {

    constructor(contextManager: ContextManager, public constructorProps: ConstructorProps) {
        super(contextManager, constructorProps);

        registerLoadable(contextManager, this._load());
    }

    private async _load() {
        setTimeout(this.unclean.bind(this), 1000);
    }

    /**
     * Perform the cleaning operation - disable specified objects and enable others
     */
    public async clean() {
        const zcomponent = this.getZComponentInstance();
        const delay = this.constructorProps.animationDelay ?? 100;
        const scene = this.getZComponentInstance(Scene);
        const fog = scene.nodes.Fog;

        await this._delay(5000);

        fog.clear();

        await this._delay(2000);
        
        // First, disable objects
        if (this.constructorProps.objectsToDisable) {
            const objectsToDisable = zcomponent.entityByID.get(this.constructorProps.objectsToDisable) as Group;
            if (objectsToDisable) {
                this._setGroupVisibility(objectsToDisable, false);
            } else {
                console.warn("objectsToDisable entity not found!");
            }
        }

        await this._delay(2000);
        
        // Then, enable objects
        if (this.constructorProps.objectsToEnable) {
            const objectsToEnable = zcomponent.entityByID.get(this.constructorProps.objectsToEnable) as Group;
            if (objectsToEnable) {
                this._setGroupVisibility(objectsToEnable, true);
            } else {
                console.warn("objectsToEnable entity not found!");
            }
        }
    }

    /**
     * Reverse the cleaning operation - restore original visibility states
     */
    public unclean() {
        const zcomponent = this.getZComponentInstance();
        
        // Enable/show the objects that were disabled
        if (this.constructorProps.objectsToDisable) {
            const objectsToDisable = zcomponent.entityByID.get(this.constructorProps.objectsToDisable) as Group;
            if (objectsToDisable) {
                this._setGroupVisibility(objectsToDisable, true);
            }
        }
        
        // Optionally hide the objects that were enabled
        if (this.constructorProps.objectsToEnable) {
            const objectsToEnable = zcomponent.entityByID.get(this.constructorProps.objectsToEnable) as Group;
            if (objectsToEnable) {
                this._setGroupVisibility(objectsToEnable, false);
            }
        }
    }

    /**
     * Helper method to set visibility of a group and all its children
     */
    private _setGroupVisibility(entity: Group, visible: boolean) {
        // If the entity has a visible property (Observable), set it
        if (entity.visible && typeof entity.visible.value !== 'undefined') {
            entity.visible.value = visible;
        }
    }


    /**
     * Helper method to find entity by its THREE.Object3D reference
     */
    private _findEntityByObject3D(zcomponent: any, object3D: THREE.Object3D): any {
        for (const [id, entity] of zcomponent.entityByID) {
            if (entity.object3D === object3D) {
                return entity;
            }
        }
        return null;
    }

    /**
     * Helper method to create a delay promise
     */
    private _delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public dispose() {
        return super.dispose();
    }
}