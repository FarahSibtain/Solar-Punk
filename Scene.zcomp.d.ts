import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { ConeGeometry as ConeGeometry_0 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { MeshBasicMaterial as MeshBasicMaterial_1 } from "@zcomponent/three/lib/components/materials/MeshBasicMaterial";
import { Box as Box_2 } from "@zcomponent/three/lib/components/meshes/Box";
import { Mesh as Mesh_3 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { Group as Group_4 } from "@zcomponent/three/lib/components/Group";
import { Audio as Audio_5 } from "@zcomponent/core/lib/components/Audio";
import { DefaultCookieConsent as DefaultCookieConsent_6 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_7 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_8 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmitterTexture as EmitterTexture_9 } from "@zcomponent/particles/lib/components/EmitterTexture";
import { Image360 as Image360_10 } from "@zcomponent/three/lib/components/Image360";
import { Fog as Fog_11 } from "./Materials/Fog";
import { XRController as XRController_12 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_13 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ParticleEmitter as ParticleEmitter_14 } from "@zcomponent/particles/lib/components/ParticleEmitter";
import { Plane as Plane_15 } from "@zcomponent/three/lib/components/meshes/Plane";
import { RingGeometry as RingGeometry_16 } from "@zcomponent/three/lib/components/geometries/RingGeometry";
import { ShadowPlane as ShadowPlane_17 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { Sphere as Sphere_18 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { Sparkle as Sparkle_19 } from "@zcomponent/particles/lib/components/prefabs/Sparkle";
import { TeleportManager as TeleportManager_20 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TeleportDistanceRestrictor as TeleportDistanceRestrictor_21 } from "./TeleportDistanceRestrictor";
import { TurnManager as TurnManager_22 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { WalkManager as WalkManager_23 } from "@zcomponent/three-webxr/lib/components/WalkManager";
import { WaterGeom as WaterGeom_24 } from "./Materials/WaterGeom";
import { XRRigVR as XRRigVR_25 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { HandMovementBehavior as HandMovementBehavior_26 } from "./HandMovementBehavior";
import { XRCamera as XRCamera_27 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_28 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_29 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { Text as Text_30 } from "@zcomponent/three/lib/components/text/Text";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Arrow_Geometry: ConeGeometry_0 & {
			behaviors: {

			}
		},
		Arrow_Material: MeshBasicMaterial_1 & {
			behaviors: {

			}
		},
		Box: Box_2 & {
			behaviors: {

			}
		},
		Cone: Mesh_3 & {
			behaviors: {

			}
		},
		ConeGeometry: ConeGeometry_0 & {
			behaviors: {

			}
		},
		Content_Group: Group_4 & {
			behaviors: {

			}
		},
		DeathZoneAudio: Audio_5 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_6 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_7 & {
			behaviors: {

			}
		},
		Defaults: Group_4 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_8 & {
			behaviors: {

			}
		},
		Emitter_Texture: EmitterTexture_9 & {
			behaviors: {

			}
		},
		Environment: Image360_10 & {
			behaviors: {

			}
		},
		Fog: Fog_11 & {
			behaviors: {

			}
		},
		LeftHandPosition: Group_4 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_12 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_13 & {
			behaviors: {

			}
		},
		Mesh_GroupDeleteMe0: Group_4 & {
			behaviors: {

			}
		},
		Particle_Emitter: ParticleEmitter_14 & {
			behaviors: {

			}
		},
		Plane: Plane_15 & {
			behaviors: {

			}
		},
		RightHandPosition: Group_4 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_12 & {
			behaviors: {

			}
		},
		Ring_Geometry: RingGeometry_16 & {
			behaviors: {

			}
		},
		Ring_Material: MeshBasicMaterial_1 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_17 & {
			behaviors: {

			}
		},
		Sphere: Sphere_18 & {
			behaviors: {

			}
		},
		SuspendedSolids: Sparkle_19 & {
			behaviors: {

			}
		},
		Teleport_Arrow: Mesh_3 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_20 & {
			behaviors: {
				0: TeleportDistanceRestrictor_21,
				TeleportDistanceRestrictor: TeleportDistanceRestrictor_21,
			}
		},
		Teleport_Ring: Mesh_3 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_22 & {
			behaviors: {

			}
		},
		Walk_Manager: WalkManager_23 & {
			behaviors: {

			}
		},
		WaterEnvironment: Group_4 & {
			behaviors: {

			}
		},
		WaterGeom: WaterGeom_24 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_25 & {
			behaviors: {
				0: HandMovementBehavior_26,
			}
		},
		XR_Camera: XRCamera_27 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_28 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_29 & {
			behaviors: {

			}
		},
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_5 & {
			behaviors: {

			}
		},
		MovementTutorial: Text_30 & {
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
