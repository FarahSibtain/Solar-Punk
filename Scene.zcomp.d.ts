import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { Mesh as Mesh_1 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { ConeGeometry as ConeGeometry_2 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { Audio as Audio_4 } from "@zcomponent/core/lib/components/Audio";
import { DefaultCookieConsent as DefaultCookieConsent_5 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_6 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_7 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmitterTexture as EmitterTexture_8 } from "@zcomponent/particles/lib/components/EmitterTexture";
import { Image360 as Image360_9 } from "@zcomponent/three/lib/components/Image360";
import { Fog as Fog_10 } from "./Materials/Fog";
import { XRController as XRController_11 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_12 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ParticleEmitter as ParticleEmitter_13 } from "@zcomponent/particles/lib/components/ParticleEmitter";
import { Plane as Plane_14 } from "@zcomponent/three/lib/components/meshes/Plane";
import { ShadowPlane as ShadowPlane_15 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { Sphere as Sphere_16 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { Sparkle as Sparkle_17 } from "@zcomponent/particles/lib/components/prefabs/Sparkle";
import { TeleportManager as TeleportManager_18 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TurnManager as TurnManager_19 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { WaterGeom as WaterGeom_20 } from "./Materials/WaterGeom";
import { XRRigVR as XRRigVR_21 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { XRCamera as XRCamera_22 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_23 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_24 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { WalkManager as WalkManager_25 } from "@zcomponent/three-webxr/lib/components/WalkManager";
import { RingGeometry as RingGeometry_26 } from "@zcomponent/three/lib/components/geometries/RingGeometry";
import { MeshBasicMaterial as MeshBasicMaterial_27 } from "@zcomponent/three/lib/components/materials/MeshBasicMaterial";

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
		DeathZoneAudio: Audio_4 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_5 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_6 & {
			behaviors: {

			}
		},
		Defaults: Group_3 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_7 & {
			behaviors: {

			}
		},
		Emitter_Texture: EmitterTexture_8 & {
			behaviors: {

			}
		},
		Environment: Image360_9 & {
			behaviors: {

			}
		},
		Fog: Fog_10 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_11 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_12 & {
			behaviors: {

			}
		},
		Mesh_GroupDeleteMe0: Group_3 & {
			behaviors: {

			}
		},
		Particle_Emitter: ParticleEmitter_13 & {
			behaviors: {

			}
		},
		Plane: Plane_14 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_11 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_15 & {
			behaviors: {

			}
		},
		Sphere: Sphere_16 & {
			behaviors: {

			}
		},
		SuspendedSolids: Sparkle_17 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_18 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_19 & {
			behaviors: {

			}
		},
		WaterEnvironment: Group_3 & {
			behaviors: {

			}
		},
		WaterGeom: WaterGeom_20 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_21 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_22 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_23 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_24 & {
			behaviors: {

			}
		},
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_4 & {
			behaviors: {

			}
		},
		Walk_Manager: WalkManager_25 & {
			behaviors: {

			}
		},
		Teleport_Ring: Mesh_1 & {
			behaviors: {

			}
		},
		Ring_Geometry: RingGeometry_26 & {
			behaviors: {

			}
		},
		Ring_Material: MeshBasicMaterial_27 & {
			behaviors: {

			}
		},
		Teleport_Arrow: Mesh_1 & {
			behaviors: {

			}
		},
		Arrow_Geometry: ConeGeometry_2 & {
			behaviors: {

			}
		},
		Arrow_Material: MeshBasicMaterial_27 & {
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
