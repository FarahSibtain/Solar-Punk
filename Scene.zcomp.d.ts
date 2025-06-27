import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { default as Button_zcomp_1 } from "./Button/Button.zcomp";
import { MyButtonBehaviour as MyButtonBehaviour_2 } from "./MyButtonBehaviour";
import { Mesh as Mesh_3 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { ConeGeometry as ConeGeometry_4 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { Group as Group_5 } from "@zcomponent/three/lib/components/Group";
import { DefaultCookieConsent as DefaultCookieConsent_6 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_7 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_8 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { Text as Text_9 } from "@zcomponent/three/lib/components/text/Text";
import { XRController as XRController_10 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_11 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ShadowPlane as ShadowPlane_12 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { SkyEnvironment as SkyEnvironment_13 } from "@zcomponent/three/lib/components/environments/SkyEnvironment";
import { Sphere as Sphere_14 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { TeleportManager as TeleportManager_15 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { Plane as Plane_16 } from "@zcomponent/three/lib/components/meshes/Plane";
import { TurnManager as TurnManager_17 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { UIHandler as UIHandler_18 } from "./UIHandler";
import { XRRigVR as XRRigVR_19 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { XRCamera as XRCamera_20 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_21 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_22 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { Audio as Audio_23 } from "@zcomponent/core/lib/components/Audio";

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
		Button: Button_zcomp_1 & {
			behaviors: {
				0: MyButtonBehaviour_2,
				MyButtonBehaviour: MyButtonBehaviour_2,
			}
		},
		Cone: Mesh_3 & {
			behaviors: {

			}
		},
		ConeGeometry: ConeGeometry_4 & {
			behaviors: {

			}
		},
		Content_Group: Group_5 & {
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
		Defaults: Group_5 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_8 & {
			behaviors: {

			}
		},
		Hello_Text: Text_9 & {
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
		Mesh_GroupDeleteMe0: Group_5 & {
			behaviors: {

			}
		},
		Red_BackgroundMaterial: MeshStandardMaterial_11 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_10 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_12 & {
			behaviors: {

			}
		},
		Sky_Environment: SkyEnvironment_13 & {
			behaviors: {

			}
		},
		Sphere: Sphere_14 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_15 & {
			behaviors: {

			}
		},
		Text_Background: Plane_16 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_17 & {
			behaviors: {

			}
		},
		UI: Group_5 & {
			behaviors: {
				0: UIHandler_18,
				UIHandler: UIHandler_18,
			}
		},
		UIDest: Group_5 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_19 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_20 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_21 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_22 & {
			behaviors: {

			}
		},
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_23 & {
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
