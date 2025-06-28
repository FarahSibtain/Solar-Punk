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
import { GLTF as GLTF_15 } from "@zcomponent/three/lib/components/models/GLTF";
import { EmitterTexture as EmitterTexture_16 } from "@zcomponent/particles/lib/components/EmitterTexture";
import { Image360 as Image360_17 } from "@zcomponent/three/lib/components/Image360";
import { Fog as Fog_18 } from "./Materials/Fog";
import { GarbageAnimController as GarbageAnimController_19 } from "./GarbageAnimController";
import { Text as Text_20 } from "@zcomponent/three/lib/components/text/Text";
import { XRController as XRController_21 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_22 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ParticleEmitter as ParticleEmitter_23 } from "@zcomponent/particles/lib/components/ParticleEmitter";
import { Plane as Plane_24 } from "@zcomponent/three/lib/components/meshes/Plane";
import { RingGeometry as RingGeometry_25 } from "@zcomponent/three/lib/components/geometries/RingGeometry";
import { ShadowPlane as ShadowPlane_26 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { Sphere as Sphere_27 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { Sparkle as Sparkle_28 } from "@zcomponent/particles/lib/components/prefabs/Sparkle";
import { TeleportManager as TeleportManager_29 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TeleportDistanceRestrictor as TeleportDistanceRestrictor_30 } from "../TeleportDistanceRestrictor";
import { TurnManager as TurnManager_31 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { WalkManager as WalkManager_32 } from "@zcomponent/three-webxr/lib/components/WalkManager";
import { WaterGeom as WaterGeom_33 } from "./Materials/WaterGeom";
import { XRRigVR as XRRigVR_34 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { HandMovementBehavior as HandMovementBehavior_35 } from "../HandMovementBehavior";
import { XRCamera as XRCamera_36 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_37 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_38 } from "@zcomponent/three-webxr/lib/components/XRManager";

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
		ButtonBillionaire: Button_zcomp_2 & {
			behaviors: {
				0: MyButtonBehaviour_3,
				MyButtonBehaviour: MyButtonBehaviour_3,
			}
		},
		ButtonCAP: Button_zcomp_2 & {
			behaviors: {
				0: MyButtonBehaviour_3,
				MyButtonBehaviour: MyButtonBehaviour_3,
			}
		},
		ButtonEP: Button_zcomp_2 & {
			behaviors: {
				0: MyButtonBehaviour_3,
				MyButtonBehaviour: MyButtonBehaviour_3,
			}
		},
		ButtonEduP: Button_zcomp_2 & {
			behaviors: {
				0: MyButtonBehaviour_3,
				MyButtonBehaviour: MyButtonBehaviour_3,
			}
		},
		ButtonGP: Button_zcomp_2 & {
			behaviors: {
				0: MyButtonBehaviour_3,
				MyButtonBehaviour: MyButtonBehaviour_3,
			}
		},
		ButtonHP: Button_zcomp_2 & {
			behaviors: {
				0: MyButtonBehaviour_3,
				MyButtonBehaviour: MyButtonBehaviour_3,
			}
		},
		ButtonSAT: Button_zcomp_2 & {
			behaviors: {
				0: MyButtonBehaviour_3,
				MyButtonBehaviour: MyButtonBehaviour_3,
			}
		},
		ButtonStudent_2: Button_zcomp_2 & {
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
		Collection: Group_5 & {
			behaviors: {

			}
		},
		Content_Group: Group_4 & {
			behaviors: {

			}
		},
		ControlUI: Group_4 & {
			behaviors: {
				0: UIHandler_5,
				UIHandler: UIHandler_5,
				1: DisableOnMove_6,
				DisableOnMove: DisableOnMove_6,
			}
		},
		Controls: Image_7 & {
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
		Defaults: Group_4 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_14 & {
			behaviors: {

			}
		},
		Ein_Flopv10_glb: GLTF_15 & {
			behaviors: {

			}
		},
		Ein_Flopv10_glb2: GLTF_15 & {
			behaviors: {

			}
		},
		Emitter_Texture: EmitterTexture_16 & {
			behaviors: {

			}
		},
		Environment: Image360_17 & {
			behaviors: {

			}
		},
		Fog: Fog_18 & {
			behaviors: {

			}
		},
		Garbage: Group_5 & {
			behaviors: {
				0: GarbageAnimController_19,
				GarbageAnimController: GarbageAnimController_19,
			}
		},
		Group_2: Group_5 & {
			behaviors: {

			}
		},
		Hello_Text: Text_20 & {
			behaviors: {

			}
		},
		LeftHandPosition: Group_4 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_21 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_22 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_22 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_22 & {
			behaviors: {

			}
		},
		Mesh_GroupDeleteMe0: Group_5 & {
			behaviors: {

			}
		},
		Particle_Emitter: ParticleEmitter_23 & {
			behaviors: {

			}
		},
		Plane: Plane_24 & {
			behaviors: {

			}
		},
		RightHandPosition: Group_5 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_21 & {
			behaviors: {

			}
		},
		Ring_Geometry: RingGeometry_25 & {
			behaviors: {

			}
		},
		Ring_Material: MeshBasicMaterial_1 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_26 & {
			behaviors: {

			}
		},
		Sphere: Sphere_27 & {
			behaviors: {
				0: TeleportDistanceRestrictor_20,
				TeleportDistanceRestrictor: TeleportDistanceRestrictor_20,
			}
		},
		SuspendedSolids: Sparkle_28 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_21 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_29 & {
			behaviors: {
				0: TeleportDistanceRestrictor_30,
				TeleportDistanceRestrictor: TeleportDistanceRestrictor_30,
			}
		},
		UIDest: Group_4 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_31 & {
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
		Walk_Manager: WalkManager_32 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_24 & {
			behaviors: {
				0: HandMovementBehavior_25,
				Hand_Movement: HandMovementBehavior_25,
			}
		},
		WaterGeom: WaterGeom_33 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_34 & {
			behaviors: {
				0: HandMovementBehavior_35,
				Hand_Movement: HandMovementBehavior_35,
			}
		},
		XR_Camera: XRCamera_36 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_37 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_38 & {
			behaviors: {

			}
		},
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_10 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		Wobble: Layer & { clips: {
			Wobble0: LayerClip;
		}};
		UI_Animations: Layer & { clips: {
			UI_FadeIn: LayerClip;
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
