import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { ConeGeometry as ConeGeometry_0 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { MeshBasicMaterial as MeshBasicMaterial_1 } from "@zcomponent/three/lib/components/materials/MeshBasicMaterial";
import { Box as Box_2 } from "@zcomponent/three/lib/components/meshes/Box";
import { default as Button_zcomp_3 } from "./Button/Button.zcomp";
import { MyButtonBehaviour as MyButtonBehaviour_4 } from "./MyButtonBehaviour";
import { Group as Group_5 } from "@zcomponent/three/lib/components/Group";
import { Mesh as Mesh_6 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { Audio as Audio_7 } from "@zcomponent/core/lib/components/Audio";
import { MyAudioEndBehavior as MyAudioEndBehavior_8 } from "./MyAudioEndBehavior";
import { DefaultCookieConsent as DefaultCookieConsent_9 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_10 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_11 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmitterTexture as EmitterTexture_12 } from "@zcomponent/particles/lib/components/EmitterTexture";
import { Image360 as Image360_13 } from "@zcomponent/three/lib/components/Image360";
import { Fog as Fog_14 } from "./Materials/Fog";
import { Text as Text_15 } from "@zcomponent/three/lib/components/text/Text";
import { XRController as XRController_16 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_17 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ParticleEmitter as ParticleEmitter_18 } from "@zcomponent/particles/lib/components/ParticleEmitter";
import { Plane as Plane_19 } from "@zcomponent/three/lib/components/meshes/Plane";
import { RingGeometry as RingGeometry_20 } from "@zcomponent/three/lib/components/geometries/RingGeometry";
import { ShadowPlane as ShadowPlane_21 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { Sphere as Sphere_22 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { Sparkle as Sparkle_23 } from "@zcomponent/particles/lib/components/prefabs/Sparkle";
import { TeleportManager as TeleportManager_24 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TeleportDistanceRestrictor as TeleportDistanceRestrictor_25 } from "../TeleportDistanceRestrictor";
import { TurnManager as TurnManager_26 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { UIHandler as UIHandler_27 } from "./UIHandler";
import { WalkManager as WalkManager_28 } from "@zcomponent/three-webxr/lib/components/WalkManager";
import { WaterGeom as WaterGeom_29 } from "./Materials/WaterGeom";
import { XRRigVR as XRRigVR_30 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { HandMovementBehavior as HandMovementBehavior_31 } from "../HandMovementBehavior";
import { XRCamera as XRCamera_32 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_33 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_34 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { Image as Image_35 } from "@zcomponent/three/lib/components/Image";
import { DisableOnMove as DisableOnMove_36 } from "./DisableOnMove";

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
		DeathZoneAudio: Audio_7 & {
			behaviors: {
				0: MyAudioEndBehavior_8,
				MyAudioEndBehavior: MyAudioEndBehavior_8,
			}
		},
		DefaultCookieConsent: DefaultCookieConsent_9 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_10 & {
			behaviors: {

			}
		},
		Defaults: Group_5 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_11 & {
			behaviors: {

			}
		},
		Emitter_Texture: EmitterTexture_12 & {
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
		Group_2: Group_5 & {
			behaviors: {

			}
		},
		Hello_Text: Text_15 & {
			behaviors: {

			}
		},
		LeftHandPosition: Group_5 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_16 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_17 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_17 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_17 & {
			behaviors: {

			}
		},
		Mesh_GroupDeleteMe0: Group_5 & {
			behaviors: {

			}
		},
		Particle_Emitter: ParticleEmitter_18 & {
			behaviors: {

			}
		},
		Plane: Plane_19 & {
			behaviors: {

			}
		},
		RightHandPosition: Group_5 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_16 & {
			behaviors: {

			}
		},
		Ring_Geometry: RingGeometry_20 & {
			behaviors: {

			}
		},
		Ring_Material: MeshBasicMaterial_1 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_21 & {
			behaviors: {

			}
		},
		Sphere: Sphere_22 & {
			behaviors: {

			}
		},
		SuspendedSolids: Sparkle_23 & {
			behaviors: {

			}
		},
		Teleport_Arrow: Mesh_6 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_24 & {
			behaviors: {
				0: TeleportDistanceRestrictor_25,
				TeleportDistanceRestrictor: TeleportDistanceRestrictor_25,
			}
		},
		Teleport_Ring: Mesh_6 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_26 & {
			behaviors: {

			}
		},
		UI: Group_5 & {
			behaviors: {
				0: UIHandler_27,
				UIHandler: UIHandler_27,
			}
		},
		UIDest: Group_5 & {
			behaviors: {

			}
		},
		Walk_Manager: WalkManager_28 & {
			behaviors: {

			}
		},
		WaterEnvironment: Group_5 & {
			behaviors: {

			}
		},
		WaterGeom: WaterGeom_29 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_30 & {
			behaviors: {
				0: HandMovementBehavior_31,
				Hand_Movement: HandMovementBehavior_31,
			}
		},
		XR_Camera: XRCamera_32 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_33 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_34 & {
			behaviors: {

			}
		},
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_7 & {
			behaviors: {

			}
		},
		Controls: Image_35 & {
			behaviors: {

			}
		},
		ControlUI: Group_5 & {
			behaviors: {
				0: UIHandler_27,
				UIHandler: UIHandler_27,
				1: DisableOnMove_36,
				DisableOnMove: DisableOnMove_36,
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
