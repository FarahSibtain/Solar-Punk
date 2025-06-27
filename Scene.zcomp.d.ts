import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { Mesh as Mesh_1 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { ConeGeometry as ConeGeometry_2 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { DefaultCookieConsent as DefaultCookieConsent_4 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_5 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_6 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmitterTexture as EmitterTexture_7 } from "@zcomponent/particles/lib/components/EmitterTexture";
import { Image360 as Image360_8 } from "@zcomponent/three/lib/components/Image360";
import { Fog as Fog_9 } from "./Materials/Fog";
import { XRController as XRController_10 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_11 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ParticleEmitter as ParticleEmitter_12 } from "@zcomponent/particles/lib/components/ParticleEmitter";
import { Plane as Plane_13 } from "@zcomponent/three/lib/components/meshes/Plane";
import { ShadowPlane as ShadowPlane_14 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { Sphere as Sphere_15 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { Sparkle as Sparkle_16 } from "@zcomponent/particles/lib/components/prefabs/Sparkle";
import { TeleportManager as TeleportManager_17 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TurnManager as TurnManager_18 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { WaterGeom as WaterGeom_19 } from "./Materials/WaterGeom";
import { XRRigVR as XRRigVR_20 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { XRCamera as XRCamera_21 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_22 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_23 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { Audio as Audio_24 } from "@zcomponent/core/lib/components/Audio";

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
		Environment: Image360_8 & {
			behaviors: {

			}
		},
		Fog: Fog_9 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_10 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_11 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_11 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_11 & {
			behaviors: {

			}
		},
		Mesh_GroupDeleteMe0: Group_3 & {
			behaviors: {

			}
		},
		Particle_Emitter: ParticleEmitter_12 & {
			behaviors: {

			}
		},
		Plane: Plane_13 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_10 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_14 & {
			behaviors: {

			}
		},
		Sphere: Sphere_15 & {
			behaviors: {

			}
		},
		SuspendedSolids: Sparkle_16 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_17 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_18 & {
			behaviors: {

			}
		},
		WaterEnvironment: Group_3 & {
			behaviors: {

			}
		},
		WaterGeom: WaterGeom_19 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_20 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_21 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_22 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_23 & {
			behaviors: {

			}
		},
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_24 & {
			behaviors: {

			}
		},
		DeathZoneAudio: Audio_24 & {
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
