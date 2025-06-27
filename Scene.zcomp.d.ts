import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { Mesh as Mesh_1 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { ConeGeometry as ConeGeometry_2 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { DefaultCookieConsent as DefaultCookieConsent_4 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_5 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_6 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { Text as Text_7 } from "@zcomponent/three/lib/components/text/Text";
import { XRController as XRController_8 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_9 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ShadowPlane as ShadowPlane_10 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { SkyEnvironment as SkyEnvironment_11 } from "@zcomponent/three/lib/components/environments/SkyEnvironment";
import { Sphere as Sphere_12 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { TeleportManager as TeleportManager_13 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { Plane as Plane_14 } from "@zcomponent/three/lib/components/meshes/Plane";
import { TurnManager as TurnManager_15 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { XRRigVR as XRRigVR_16 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { XRCamera as XRCamera_17 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_18 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_19 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { Audio as Audio_20 } from "@zcomponent/core/lib/components/Audio";

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
		DefaultCookieConsent: DefaultCookieConsent_4 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_5 & {
			behaviors: {

			}
		},
		Defaults: Group_3 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_6 & {
			behaviors: {

			}
		},
		Hello_Text: Text_7 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_8 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_9 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_9 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_9 & {
			behaviors: {

			}
		},
		Mesh_GroupDeleteMe0: Group_3 & {
			behaviors: {

			}
		},
		Red_BackgroundMaterial: MeshStandardMaterial_9 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_8 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_10 & {
			behaviors: {

			}
		},
		Sky_Environment: SkyEnvironment_11 & {
			behaviors: {

			}
		},
		Sphere: Sphere_12 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_13 & {
			behaviors: {

			}
		},
		Text_Background: Plane_14 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_15 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_16 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_17 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_18 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_19 & {
			behaviors: {

			}
		},
		zapsplat_nature_underwater_ambience_deep_007_30532_mp3: Audio_20 & {
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
