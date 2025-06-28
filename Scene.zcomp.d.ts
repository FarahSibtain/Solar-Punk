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
import { Image360 as Image360_13 } from "@zcomponent/three/lib/components/Image360";
import { Fog as Fog_14 } from "./Materials/Fog";
import { Text as Text_15 } from "@zcomponent/three/lib/components/text/Text";
import { XRController as XRController_16 } from "@zcomponent/three-webxr/lib/components/XRController";
import { default as Objekts_zcomp_17 } from "./Objekts.zcomp";
import { RingGeometry as RingGeometry_18 } from "@zcomponent/three/lib/components/geometries/RingGeometry";
import { Mesh as Mesh_19 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { TeleportManager as TeleportManager_20 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TeleportDistanceRestrictor as TeleportDistanceRestrictor_21 } from "../TeleportDistanceRestrictor";
import { TurnManager as TurnManager_22 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { WalkManager as WalkManager_23 } from "@zcomponent/three-webxr/lib/components/WalkManager";
import { WaterGeom as WaterGeom_24 } from "./Materials/WaterGeom";
import { XRRigVR as XRRigVR_25 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { HandMovementBehavior as HandMovementBehavior_26 } from "../HandMovementBehavior";
import { XRCamera as XRCamera_27 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_28 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_29 } from "@zcomponent/three-webxr/lib/components/XRManager";

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
		Environment: Image360_13 & {
			behaviors: {

			}
		},
		Fog: Fog_14 & {
			behaviors: {

			}
		},
		Group_2: Group_4 & {
			behaviors: {

			}
		},
		Hello_Text: Text_15 & {
			behaviors: {

			}
		},
		LeftHandPosition: Group_4 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_16 & {
			behaviors: {

			}
		},
		Objekts: Objekts_zcomp_17 & {
			behaviors: {

			}
		},
		RightHandPosition: Group_4 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_16 & {
			behaviors: {

			}
		},
		Ring_Geometry: RingGeometry_18 & {
			behaviors: {

			}
		},
		Ring_Material: MeshBasicMaterial_1 & {
			behaviors: {

			}
		},
		Teleport_Arrow: Mesh_19 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_20 & {
			behaviors: {
				0: TeleportDistanceRestrictor_21,
				TeleportDistanceRestrictor: TeleportDistanceRestrictor_21,
			}
		},
		Teleport_Ring: Mesh_19 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_22 & {
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
				Hand_Movement: HandMovementBehavior_26,
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
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_8 & {
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
