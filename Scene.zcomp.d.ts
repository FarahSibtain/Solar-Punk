import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { default as Button_zcomp_1 } from "./Button/Button.zcomp";
import { MyButtonBehaviour as MyButtonBehaviour_2 } from "./MyButtonBehaviour";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { Mesh as Mesh_4 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { ConeGeometry as ConeGeometry_5 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { Audio as Audio_6 } from "@zcomponent/core/lib/components/Audio";
import { MyAudioEndBehavior as MyAudioEndBehavior_7 } from "./MyAudioEndBehavior";
import { DefaultCookieConsent as DefaultCookieConsent_8 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_9 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_10 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { EmitterTexture as EmitterTexture_11 } from "@zcomponent/particles/lib/components/EmitterTexture";
import { Image360 as Image360_12 } from "@zcomponent/three/lib/components/Image360";
import { Fog as Fog_13 } from "./Materials/Fog";
import { Text as Text_14 } from "@zcomponent/three/lib/components/text/Text";
import { XRController as XRController_15 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_16 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ParticleEmitter as ParticleEmitter_17 } from "@zcomponent/particles/lib/components/ParticleEmitter";
import { Plane as Plane_18 } from "@zcomponent/three/lib/components/meshes/Plane";
import { ShadowPlane as ShadowPlane_19 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { Sphere as Sphere_20 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { Sparkle as Sparkle_21 } from "@zcomponent/particles/lib/components/prefabs/Sparkle";
import { TeleportManager as TeleportManager_22 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TurnManager as TurnManager_23 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { UIHandler as UIHandler_24 } from "./UIHandler";
import { WaterGeom as WaterGeom_25 } from "./Materials/WaterGeom";
import { XRRigVR as XRRigVR_26 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
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
		DeathZoneAudio: Audio_6 & {
			behaviors: {
				0: MyAudioEndBehavior_7,
				MyAudioEndBehavior: MyAudioEndBehavior_7,
			}
		},
		DefaultCookieConsent: DefaultCookieConsent_8 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_9 & {
			behaviors: {

			}
		},
		Defaults: Group_3 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_10 & {
			behaviors: {

			}
		},
		Emitter_Texture: EmitterTexture_11 & {
			behaviors: {

			}
		},
		Environment: Image360_12 & {
			behaviors: {

			}
		},
		Fog: Fog_13 & {
			behaviors: {

			}
		},
		Group_2: Group_3 & {
			behaviors: {

			}
		},
		Hello_Text: Text_14 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_15 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
		Mesh_GroupDeleteMe0: Group_3 & {
			behaviors: {

			}
		},
		Particle_Emitter: ParticleEmitter_17 & {
			behaviors: {

			}
		},
		Plane: Plane_18 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_15 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_19 & {
			behaviors: {

			}
		},
		Sphere: Sphere_20 & {
			behaviors: {

			}
		},
		SuspendedSolids: Sparkle_21 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_22 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_23 & {
			behaviors: {

			}
		},
		UI: Group_3 & {
			behaviors: {
				0: UIHandler_24,
				UIHandler: UIHandler_24,
			}
		},
		UIDest: Group_3 & {
			behaviors: {

			}
		},
		WaterEnvironment: Group_3 & {
			behaviors: {

			}
		},
		WaterGeom: WaterGeom_25 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_26 & {
			behaviors: {

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
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_6 & {
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
