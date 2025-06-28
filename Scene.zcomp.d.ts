import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { Mesh as Mesh_1 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { ConeGeometry as ConeGeometry_2 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { DefaultCookieConsent as DefaultCookieConsent_4 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_5 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_6 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmitterTexture as EmitterTexture_7 } from "@zcomponent/particles/lib/components/EmitterTexture";
import { Fog as Fog_8 } from "./Materials/Fog";
import { MeshStandardMaterial as MeshStandardMaterial_9 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { Text as Text_10 } from "@zcomponent/three/lib/components/text/Text";
import { ParticleEmitter as ParticleEmitter_11 } from "@zcomponent/particles/lib/components/ParticleEmitter";
import { Plane as Plane_12 } from "@zcomponent/three/lib/components/meshes/Plane";
import { ShadowPlane as ShadowPlane_13 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { Sphere as Sphere_14 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { Sparkle as Sparkle_15 } from "@zcomponent/particles/lib/components/prefabs/Sparkle";
import { WaterGeom as WaterGeom_16 } from "./Materials/WaterGeom";
import { Audio as Audio_17 } from "@zcomponent/core/lib/components/Audio";
import { default as XRRigVR_zcomp_18 } from "./XRRigVR/XRRigVR.zcomp";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Box: Box_0 & {
			behaviors: {

			}
		},
		Cone: Mesh_1 & {
			behaviors: {

			}
		},
		ConeGeometry: ConeGeometry_2 & {
			behaviors: {

			}
		},
		Content_Group: Group_3 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_4 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_5 & {
			behaviors: {

			}
		},
		Defaults: Group_3 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_6 & {
			behaviors: {

			}
		},
		Emitter_Texture: EmitterTexture_7 & {
			behaviors: {

			}
		},
		Fog: Fog_8 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_9 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_9 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_9 & {
			behaviors: {

			}
		},
		Mesh_GroupDeleteMe0: Group_3 & {
			behaviors: {

			}
		},
		MovementTutorial: Text_10 & {
			behaviors: {

			}
		},
		Particle_Emitter: ParticleEmitter_11 & {
			behaviors: {

			}
		},
		Plane: Plane_12 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_13 & {
			behaviors: {

			}
		},
		Sphere: Sphere_14 & {
			behaviors: {

			}
		},
		SuspendedSolids: Sparkle_15 & {
			behaviors: {

			}
		},
		WaterEnvironment: Group_3 & {
			behaviors: {

			}
		},
		WaterGeom: WaterGeom_16 & {
			behaviors: {

			}
		},
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_17 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_zcomp_18 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
