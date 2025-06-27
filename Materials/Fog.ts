import { ContextManager, Observable, registerLoadable, useOnBeforeRender } from "@zcomponent/core";
import { useScene } from "@zcomponent/three";
import { Group } from "@zcomponent/three/lib/components/Group";
import * as THREE from "three";

interface ConstructorProps {
    /**
     * The radius of the sphere to create
     * 
     * @zui
     * @zdefault 1
     */
    radius: number;
    
    /**
     * Exclude Image360 components from fog
     * 
     * @zui
     * @zdefault true
     */
    excludeImage360: boolean;
}

/**
 * @zcomponent
 * @zicon favorite
 */
export class Fog extends Group {

	public material = new THREE.MeshBasicMaterial();

    /**
     * @zui
     * @zdefault [1, 1, 1]
     * @ztype color-norm-rgb
     */
    public color = new Observable([1, 1, 1], v => this.material.color.setRGB(...v));

    constructor(contextManager: ContextManager, public constructorProps: ConstructorProps) {
        super(contextManager, constructorProps);

        registerLoadable(contextManager, this._load());
        
    }

    private async _load() {

        // Perform and loading or setup for the component

        const scene = useScene(this.contextManager);
		scene.fog = new THREE.FogExp2(0x1cadfc, .7);

        // Exclude Image360 components from fog if requested
        if (this.constructorProps.excludeImage360 ?? true) {
            this.register(useOnBeforeRender(this.contextManager), () => {
                scene.traverse((object) => {
                    if (object instanceof THREE.Mesh && object.material) {
                        // Check if this is an Image360 component (typically uses MeshBasicMaterial with a spherical geometry)
                        if (object.geometry instanceof THREE.SphereGeometry && 
                            object.material instanceof THREE.MeshBasicMaterial &&
                            object.scale.x < 0) { // Image360 spheres are typically inverted
                            object.material.fog = false;
                        }
                    }
                });
            });
        }

    }

    public dispose() {

        // Clean up any resources that have been created here

        return super.dispose();
    }
}