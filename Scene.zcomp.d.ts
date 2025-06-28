import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { ConeGeometry as ConeGeometry_0 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { MeshBasicMaterial as MeshBasicMaterial_1 } from "@zcomponent/three/lib/components/materials/MeshBasicMaterial";
import { Box as Box_2 } from "@zcomponent/three/lib/components/meshes/Box";
import { default as Button_zcomp_3 } from "./Button/Button.zcomp";
import { MyButtonBehaviour as MyButtonBehaviour_4 } from "./MyButtonBehaviour";
import { Group as Group_5 } from "@zcomponent/three/lib/components/Group";
import { Mesh as Mesh_6 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { UIHandler as UIHandler_7 } from "./UIHandler";
import { DisableOnMove as DisableOnMove_8 } from "./DisableOnMove";
import { Image as Image_9 } from "@zcomponent/three/lib/components/Image";
import { Audio as Audio_10 } from "@zcomponent/core/lib/components/Audio";
import { MyAudioEndBehavior as MyAudioEndBehavior_11 } from "./MyAudioEndBehavior";
import { DefaultCookieConsent as DefaultCookieConsent_12 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_13 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_14 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmitterTexture as EmitterTexture_15 } from "@zcomponent/particles/lib/components/EmitterTexture";
import { Image360 as Image360_16 } from "@zcomponent/three/lib/components/Image360";
import { Fog as Fog_17 } from "./Materials/Fog";
import { Text as Text_18 } from "@zcomponent/three/lib/components/text/Text";
import { XRController as XRController_19 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_20 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ParticleEmitter as ParticleEmitter_21 } from "@zcomponent/particles/lib/components/ParticleEmitter";
import { Plane as Plane_22 } from "@zcomponent/three/lib/components/meshes/Plane";
import { RingGeometry as RingGeometry_23 } from "@zcomponent/three/lib/components/geometries/RingGeometry";
import { ShadowPlane as ShadowPlane_24 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { Sphere as Sphere_25 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { Sparkle as Sparkle_26 } from "@zcomponent/particles/lib/components/prefabs/Sparkle";
import { TeleportManager as TeleportManager_27 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TeleportDistanceRestrictor as TeleportDistanceRestrictor_28 } from "../TeleportDistanceRestrictor";
import { TurnManager as TurnManager_29 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { WalkManager as WalkManager_30 } from "@zcomponent/three-webxr/lib/components/WalkManager";
import { WaterGeom as WaterGeom_31 } from "./Materials/WaterGeom";
import { XRRigVR as XRRigVR_32 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { HandMovementBehavior as HandMovementBehavior_33 } from "../HandMovementBehavior";
import { XRCamera as XRCamera_34 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_35 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_36 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { GarbageAnimController as GarbageAnimController_37 } from "./GarbageAnimController";
import { GLTF as GLTF_38 } from "@zcomponent/three/lib/components/models/GLTF";

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
		ButtonBillionaire: Button_zcomp_3 & {
			behaviors: {
				0: MyButtonBehaviour_4,
				MyButtonBehaviour: MyButtonBehaviour_4,
			}
		},
		ButtonCAP: Button_zcomp_3 & {
			behaviors: {
				0: MyButtonBehaviour_4,
				MyButtonBehaviour: MyButtonBehaviour_4,
			}
		},
		ButtonEP: Button_zcomp_3 & {
			behaviors: {
				0: MyButtonBehaviour_4,
				MyButtonBehaviour: MyButtonBehaviour_4,
			}
		},
		ButtonEduP: Button_zcomp_3 & {
			behaviors: {
				0: MyButtonBehaviour_4,
				MyButtonBehaviour: MyButtonBehaviour_4,
			}
		},
		ButtonGP: Button_zcomp_3 & {
			behaviors: {
				0: MyButtonBehaviour_4,
				MyButtonBehaviour: MyButtonBehaviour_4,
			}
		},
		ButtonHP: Button_zcomp_3 & {
			behaviors: {
				0: MyButtonBehaviour_4,
				MyButtonBehaviour: MyButtonBehaviour_4,
			}
		},
		ButtonSAT: Button_zcomp_3 & {
			behaviors: {
				0: MyButtonBehaviour_4,
				MyButtonBehaviour: MyButtonBehaviour_4,
			}
		},
		ButtonStudent_2: Button_zcomp_3 & {
			behaviors: {
				0: MyButtonBehaviour_4,
				MyButtonBehaviour: MyButtonBehaviour_4,
			}
		},
		Buttons: Group_5 & {
			behaviors: {

			}
		},
		Cone: Mesh_6 & {
			behaviors: {

			}
		},
		ConeGeometry: ConeGeometry_0 & {
			behaviors: {

			}
		},
		Content_Group: Group_5 & {
			behaviors: {

			}
		},
		ControlUI: Group_5 & {
			behaviors: {
				0: UIHandler_7,
				UIHandler: UIHandler_7,
				1: DisableOnMove_8,
				DisableOnMove: DisableOnMove_8,
			}
		},
		Controls: Image_9 & {
			behaviors: {

			}
		},
		DeathZoneAudio: Audio_10 & {
			behaviors: {
				0: MyAudioEndBehavior_11,
				MyAudioEndBehavior: MyAudioEndBehavior_11,
			}
		},
		DefaultCookieConsent: DefaultCookieConsent_12 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_13 & {
			behaviors: {

			}
		},
		Defaults: Group_5 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_14 & {
			behaviors: {

			}
		},
		Emitter_Texture: EmitterTexture_15 & {
			behaviors: {

			}
		},
		Environment: Image360_16 & {
			behaviors: {

			}
		},
		Fog: Fog_17 & {
			behaviors: {

			}
		},
		Group_2: Group_5 & {
			behaviors: {

			}
		},
		Hello_Text: Text_18 & {
			behaviors: {

			}
		},
		LeftHandPosition: Group_5 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_19 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_20 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_20 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_20 & {
			behaviors: {

			}
		},
		Mesh_GroupDeleteMe0: Group_5 & {
			behaviors: {

			}
		},
		Particle_Emitter: ParticleEmitter_21 & {
			behaviors: {

			}
		},
		Plane: Plane_22 & {
			behaviors: {

			}
		},
		RightHandPosition: Group_5 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_19 & {
			behaviors: {

			}
		},
		Ring_Geometry: RingGeometry_23 & {
			behaviors: {

			}
		},
		Ring_Material: MeshBasicMaterial_1 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_24 & {
			behaviors: {

			}
		},
		Sphere: Sphere_25 & {
			behaviors: {

			}
		},
		SuspendedSolids: Sparkle_26 & {
			behaviors: {

			}
		},
		Teleport_Arrow: Mesh_6 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_27 & {
			behaviors: {
				0: TeleportDistanceRestrictor_28,
				TeleportDistanceRestrictor: TeleportDistanceRestrictor_28,
			}
		},
		Teleport_Ring: Mesh_6 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_29 & {
			behaviors: {

			}
		},
		UI: Group_5 & {
			behaviors: {
				0: UIHandler_7,
				UIHandler: UIHandler_7,
			}
		},
		UIDest: Group_5 & {
			behaviors: {

			}
		},
		Walk_Manager: WalkManager_30 & {
			behaviors: {

			}
		},
		WaterEnvironment: Group_5 & {
			behaviors: {

			}
		},
		WaterGeom: WaterGeom_31 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_32 & {
			behaviors: {
				0: HandMovementBehavior_33,
				Hand_Movement: HandMovementBehavior_33,
			}
		},
		XR_Camera: XRCamera_34 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_35 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_36 & {
			behaviors: {

			}
		},
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_10 & {
			behaviors: {

			}
		},
		Garbage: Group_5 & {
			behaviors: {
				0: GarbageAnimController_37,
				GarbageAnimController: GarbageAnimController_37,
			}
		},
		Collection: Group_5 & {
			behaviors: {

			}
		},
		Ein_Flopv10_glb: GLTF_38 & {
			behaviors: {

			}
		},
		Ein_Flopv10_glb2: GLTF_38 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		UI_Animations: Layer & { clips: {
			UI_FadeIn: LayerClip;
		}};
		Wobble: Layer & { clips: {
			Wobble0: LayerClip;
		}};
		GarbagePath: Layer & { clips: {
			GP: LayerClip;
		}};
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
