import { ContextManager, Observable, registerLoadable } from "@zcomponent/core";
import { Group } from "@zcomponent/three/lib/components/Group";
import * as THREE from "three";

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
    public clean() {
        const zcomponent = this.getZComponentInstance();
        
        // Disable/hide the objects to disable
        if (this.constructorProps.objectsToDisable) {
            const objectsToDisable = zcomponent.entityByID.get(this.constructorProps.objectsToDisable);
            if (objectsToDisable) {
                this._setGroupVisibility(objectsToDisable, false);
            }
        }
        
        // Enable/show the objects to enable
        if (this.constructorProps.objectsToEnable) {
            const objectsToEnable = zcomponent.entityByID.get(this.constructorProps.objectsToEnable);
            if (objectsToEnable) {
                this._setGroupVisibility(objectsToEnable, true);
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
            const objectsToDisable = zcomponent.entityByID.get(this.constructorProps.objectsToDisable);
            if (objectsToDisable) {
                this._setGroupVisibility(objectsToDisable, true);
            }
        }
        
        // Optionally hide the objects that were enabled
        if (this.constructorProps.objectsToEnable) {
            const objectsToEnable = zcomponent.entityByID.get(this.constructorProps.objectsToEnable);
            if (objectsToEnable) {
                this._setGroupVisibility(objectsToEnable, false);
            }
        }
    }

    /**
     * Helper method to set visibility of a group and all its children
     */
    private _setGroupVisibility(entity: any, visible: boolean) {
        // If the entity has a visible property (Observable), set it
        if (entity.visible && typeof entity.visible.value !== 'undefined') {
            entity.visible.value = visible;
        }
        
        // If it's a THREE.js Object3D, set visibility directly
        if (entity.object3D) {
            entity.object3D.visible = visible;
            // Recursively set visibility for all children
            entity.object3D.traverse((child: THREE.Object3D) => {
                child.visible = visible;
            });
        }
    }

    public dispose() {
        return super.dispose();
    }
}