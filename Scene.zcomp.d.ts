import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { ConeGeometry as ConeGeometry_0 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { MeshBasicMaterial as MeshBasicMaterial_1 } from "@zcomponent/three/lib/components/materials/MeshBasicMaterial";
import { default as Button_zcomp_2 } from "./Button/Button.zcomp";
import { MyButtonBehaviour as MyButtonBehaviour_3 } from "./MyButtonBehaviour";
import { Group as Group_4 } from "@zcomponent/three/lib/components/Group";
import { UIHandler as UIHandler_5 } from "./UIHandler";
import { DisableOnMove as DisableOnMove_6 } from "./DisableOnMove";
import { Image as Image_7 } from "@zcomponent/three/lib/components/Image";
import { Audio as Audio_8 } from "@zcomponent/core/lib/components/Audio";
import { MyAudioEndBehavior as MyAudioEndBehavior_9 } from "./MyAudioEndBehavior";
import { DefaultCookieConsent as DefaultCookieConsent_10 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_11 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_12 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmitterTexture as EmitterTexture_13 } from "@zcomponent/particles/lib/components/EmitterTexture";
import { Image360 as Image360_14 } from "@zcomponent/three/lib/components/Image360";
import { Fog as Fog_15 } from "./Materials/Fog";
import { Text as Text_16 } from "@zcomponent/three/lib/components/text/Text";
import { XRController as XRController_17 } from "@zcomponent/three-webxr/lib/components/XRController";
import { ParticleEmitter as ParticleEmitter_18 } from "@zcomponent/particles/lib/components/ParticleEmitter";
import { RingGeometry as RingGeometry_19 } from "@zcomponent/three/lib/components/geometries/RingGeometry";
import { Sparkle as Sparkle_20 } from "@zcomponent/particles/lib/components/prefabs/Sparkle";
import { Mesh as Mesh_21 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { TeleportManager as TeleportManager_22 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TeleportDistanceRestrictor as TeleportDistanceRestrictor_23 } from "../TeleportDistanceRestrictor";
import { TurnManager as TurnManager_24 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { WalkManager as WalkManager_25 } from "@zcomponent/three-webxr/lib/components/WalkManager";
import { WaterGeom as WaterGeom_26 } from "./Materials/WaterGeom";
import { XRRigVR as XRRigVR_27 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { HandMovementBehavior as HandMovementBehavior_28 } from "../HandMovementBehavior";
import { XRCamera as XRCamera_29 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_30 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_31 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { default as Objekts_zcomp_32 } from "./Objekts.zcomp";

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
				0: MyButtonBehaviour_3,
				MyButtonBehaviour: MyButtonBehaviour_3,
			}
		},
		Buttons: Group_4 & {
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
		DeathZoneAudio: Audio_8 & {
			behaviors: {
				0: MyAudioEndBehavior_9,
				MyAudioEndBehavior: MyAudioEndBehavior_9,
			}
		},
		DefaultCookieConsent: DefaultCookieConsent_10 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_11 & {
			behaviors: {

			}
		},
		Defaults: Group_4 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_12 & {
			behaviors: {

			}
		},
		Emitter_Texture: EmitterTexture_13 & {
			behaviors: {

			}
		},
		Environment: Image360_14 & {
			behaviors: {

			}
		},
		Fog: Fog_15 & {
			behaviors: {

			}
		},
		Group_2: Group_4 & {
			behaviors: {

			}
		},
		Hello_Text: Text_16 & {
			behaviors: {

			}
		},
		LeftHandPosition: Group_4 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_17 & {
			behaviors: {

			}
		},
		Particle_Emitter: ParticleEmitter_18 & {
			behaviors: {

			}
		},
		RightHandPosition: Group_4 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_17 & {
			behaviors: {

			}
		},
		Ring_Geometry: RingGeometry_19 & {
			behaviors: {

			}
		},
		Ring_Material: MeshBasicMaterial_1 & {
			behaviors: {

			}
		},
		SuspendedSolids: Sparkle_20 & {
			behaviors: {

			}
		},
		Teleport_Arrow: Mesh_21 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_22 & {
			behaviors: {
				0: TeleportDistanceRestrictor_23,
				TeleportDistanceRestrictor: TeleportDistanceRestrictor_23,
			}
		},
		Teleport_Ring: Mesh_21 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_24 & {
			behaviors: {

			}
		},
		UI: Group_4 & {
			behaviors: {
				0: UIHandler_5,
				UIHandler: UIHandler_5,
			}
		},
		UIDest: Group_4 & {
			behaviors: {

			}
		},
		Walk_Manager: WalkManager_25 & {
			behaviors: {

			}
		},
		WaterEnvironment: Group_4 & {
			behaviors: {

			}
		},
		WaterGeom: WaterGeom_26 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_27 & {
			behaviors: {
				0: HandMovementBehavior_28,
				Hand_Movement: HandMovementBehavior_28,
			}
		},
		XR_Camera: XRCamera_29 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_30 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_31 & {
			behaviors: {

			}
		},
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_8 & {
			behaviors: {

			}
		},
		Objekts: Objekts_zcomp_32 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		UI_Animations: Layer & { clips: {
			UI_FadeIn: LayerClip;
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
