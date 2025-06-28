import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { default as Button_zcomp_1 } from "./Button/Button.zcomp";
import { MyButtonBehaviour as MyButtonBehaviour_2 } from "./MyButtonBehaviour";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { Mesh as Mesh_4 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { ConeGeometry as ConeGeometry_5 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { DefaultCookieConsent as DefaultCookieConsent_6 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_7 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_8 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmitterTexture as EmitterTexture_9 } from "@zcomponent/particles/lib/components/EmitterTexture";
import { Fog as Fog_10 } from "./Materials/Fog";
import { Text as Text_11 } from "@zcomponent/three/lib/components/text/Text";
import { MeshStandardMaterial as MeshStandardMaterial_12 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ParticleEmitter as ParticleEmitter_13 } from "@zcomponent/particles/lib/components/ParticleEmitter";
import { Plane as Plane_14 } from "@zcomponent/three/lib/components/meshes/Plane";
import { ShadowPlane as ShadowPlane_15 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { Sphere as Sphere_16 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { Sparkle as Sparkle_17 } from "@zcomponent/particles/lib/components/prefabs/Sparkle";
import { UIHandler as UIHandler_18 } from "./UIHandler";
import { WaterGeom as WaterGeom_19 } from "./Materials/WaterGeom";
import { Audio as Audio_20 } from "@zcomponent/core/lib/components/Audio";
import { XRRigVR as XRRigVR_21 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { HandMovementBehavior as HandMovementBehavior_22 } from "../HandMovementBehavior";
import { XRController as XRController_23 } from "@zcomponent/three-webxr/lib/components/XRController";
import { XRCamera as XRCamera_24 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { WalkManager as WalkManager_25 } from "@zcomponent/three-webxr/lib/components/WalkManager";
import { TeleportManager as TeleportManager_26 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TeleportDistanceRestrictor as TeleportDistanceRestrictor_27 } from "../TeleportDistanceRestrictor";
import { RingGeometry as RingGeometry_28 } from "@zcomponent/three/lib/components/geometries/RingGeometry";
import { MeshBasicMaterial as MeshBasicMaterial_29 } from "@zcomponent/three/lib/components/materials/MeshBasicMaterial";
import { TurnManager as TurnManager_30 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { XRManager as XRManager_31 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { XRDefaultLoader as XRDefaultLoader_32 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { Image360 as Image360_33 } from "@zcomponent/three/lib/components/Image360";
import { MyAudioEndBehavior as MyAudioEndBehavior_34 } from "./MyAudioEndBehavior";

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
		ButtonBillionaire: Button_zcomp_1 & {
			behaviors: {
				0: MyButtonBehaviour_2,
				MyButtonBehaviour: MyButtonBehaviour_2,
			}
		},
		ButtonCAP: Button_zcomp_1 & {
			behaviors: {
				0: MyButtonBehaviour_2,
				MyButtonBehaviour: MyButtonBehaviour_2,
			}
		},
		ButtonEP: Button_zcomp_1 & {
			behaviors: {
				0: MyButtonBehaviour_2,
				MyButtonBehaviour: MyButtonBehaviour_2,
			}
		},
		ButtonEduP: Button_zcomp_1 & {
			behaviors: {
				0: MyButtonBehaviour_2,
				MyButtonBehaviour: MyButtonBehaviour_2,
			}
		},
		ButtonGP: Button_zcomp_1 & {
			behaviors: {
				0: MyButtonBehaviour_2,
				MyButtonBehaviour: MyButtonBehaviour_2,
			}
		},
		ButtonHP: Button_zcomp_1 & {
			behaviors: {
				0: MyButtonBehaviour_2,
				MyButtonBehaviour: MyButtonBehaviour_2,
			}
		},
		ButtonSAT: Button_zcomp_1 & {
			behaviors: {
				0: MyButtonBehaviour_2,
				MyButtonBehaviour: MyButtonBehaviour_2,
			}
		},
		ButtonStudent_2: Button_zcomp_1 & {
			behaviors: {
				0: MyButtonBehaviour_2,
				MyButtonBehaviour: MyButtonBehaviour_2,
			}
		},
		Buttons: Group_3 & {
			behaviors: {

			}
		},
		Cone: Mesh_4 & {
			behaviors: {

			}
		},
		ConeGeometry: ConeGeometry_5 & {
			behaviors: {

			}
		},
		Content_Group: Group_3 & {
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
		Defaults: Group_3 & {
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
		Fog: Fog_10 & {
			behaviors: {

			}
		},
		Group_2: Group_3 & {
			behaviors: {

			}
		},
		Hello_Text: Text_11 & {
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
		UI: Group_3 & {
			behaviors: {
				0: UIHandler_18,
				UIHandler: UIHandler_18,
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
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_20 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_21 & {
			behaviors: {
				0: HandMovementBehavior_22,
				Hand_Movement: HandMovementBehavior_22,
			}
		},
		Left_Controller: XRController_23 & {
			behaviors: {

			}
		},
		LeftHandPosition: Group_3 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_23 & {
			behaviors: {

			}
		},
		RightHandPosition: Group_3 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_24 & {
			behaviors: {

			}
		},
		UIDest: Group_3 & {
			behaviors: {

			}
		},
		Walk_Manager: WalkManager_25 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_26 & {
			behaviors: {
				0: TeleportDistanceRestrictor_27,
				TeleportDistanceRestrictor: TeleportDistanceRestrictor_27,
			}
		},
		Teleport_Ring: Mesh_4 & {
			behaviors: {

			}
		},
		Ring_Geometry: RingGeometry_28 & {
			behaviors: {

			}
		},
		Ring_Material: MeshBasicMaterial_29 & {
			behaviors: {

			}
		},
		Teleport_Arrow: Mesh_4 & {
			behaviors: {

			}
		},
		Arrow_Geometry: ConeGeometry_5 & {
			behaviors: {

			}
		},
		Arrow_Material: MeshBasicMaterial_29 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_30 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_31 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_32 & {
			behaviors: {

			}
		},
		Environment: Image360_33 & {
			behaviors: {

			}
		},
		DeathZoneAudio: Audio_20 & {
			behaviors: {
				0: MyAudioEndBehavior_34,
				MyAudioEndBehavior: MyAudioEndBehavior_34,
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
