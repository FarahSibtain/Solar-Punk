import { ContextManager, Observable, registerLoadable } from "@zcomponent/core";
import { Group } from "@zcomponent/three/lib/components/Group";
import * as THREE from "three";
import Scene from "./Scene.zcomp";
import Objects from "./Objekts.zcomp";

interface ConstructorProps {
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
     * Perform the cleaning operation - disable Dead_World objects and enable Recovered objects
     */
    public async clean() {
        const delay = this.constructorProps.animationDelay ?? 100;
        const scene = this.getZComponentInstance(Scene);
        const fog = scene.nodes.Fog;

        await this._delay(5000);

        fog.clear();

        await this._delay(2000);
        
        // Access Objects through the Scene's node hierarchy
        const objektsNode = scene.nodes.Objekts;
        
        // Replace textures for all Soft Sandy v18 objects in Soft_molded_sand group
        if (objektsNode && objektsNode.nodes.Soft_molded_sand) {
            await this._replaceSoftSandyTextures(objektsNode.nodes.Soft_molded_sand);
        } else {
            console.warn("Soft_molded_sand group not found!");
        }

        await this._delay(1000);
        
        // First, disable Dead_World objects
        if (objektsNode && objektsNode.nodes.Dead_World) {
            this._setGroupVisibility(objektsNode.nodes.Dead_World, false);
        } else {
            console.warn("Dead_World group not found!");
        }

        await this._delay(2000);
        
        // Then, enable Recovered objects
        if (objektsNode && objektsNode.nodes.Recovred) {
            this._setGroupVisibility(objektsNode.nodes.Recovred, true);
        } else {
            console.warn("Recovred group not found!");
        }
    }

    /**
     * Reverse the cleaning operation - restore original visibility states
     */
    public unclean() {
        const scene = this.getZComponentInstance(Scene);
        const objektsNode = scene.nodes.Objekts;
        
        // Enable/show the Dead_World objects that were disabled
        if (objektsNode && objektsNode.nodes.Dead_World) {
            this._setGroupVisibility(objektsNode.nodes.Dead_World, true);
        }
        
        // Hide the Recovered objects that were enabled
        if (objektsNode && objektsNode.nodes.Recovred) {
            this._setGroupVisibility(objektsNode.nodes.Recovred, false);
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
     * Replace textures for all Soft Sandy v18 objects with clean texture
     */
    private async _replaceSoftSandyTextures(softMoldedSandGroup: Group) {
        const cleanTextureUrl = new URL('./Images/soft-sandy-clean.webp', import.meta.url);
        const textureLoader = new THREE.TextureLoader();
        
        try {
            const cleanTexture = await new Promise<THREE.Texture>((resolve, reject) => {
                textureLoader.load(
                    cleanTextureUrl.href,
                    resolve,
                    undefined,
                    reject
                );
            });
            
            // Traverse through all children of the Soft_molded_sand group
            if (softMoldedSandGroup.element) {
                softMoldedSandGroup.element.traverse((child) => {
                    if (child instanceof THREE.Mesh && child.material) {
                        // Handle both single materials and material arrays
                        const materials = Array.isArray(child.material) ? child.material : [child.material];
                        
                        materials.forEach((material) => {
                            if (material instanceof THREE.MeshStandardMaterial || 
                                material instanceof THREE.MeshBasicMaterial ||
                                material instanceof THREE.MeshPhongMaterial) {
                                // Replace the diffuse/albedo texture
                                material.map = cleanTexture;
                                material.needsUpdate = true;
                            }
                        });
                    }
                });
            }
            
            console.log("Successfully replaced textures for Soft Sandy objects");
        } catch (error) {
            console.error("Failed to load clean texture:", error);
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