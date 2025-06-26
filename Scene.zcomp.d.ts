import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { Mesh as Mesh_1 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { ConeGeometry as ConeGeometry_2 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { DefaultCookieConsent as DefaultCookieConsent_4 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_5 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_6 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { XRController as XRController_7 } from "@zcomponent/three-webxr/lib/components/XRController";
import { MeshStandardMaterial as MeshStandardMaterial_8 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ShadowPlane as ShadowPlane_9 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { SkyEnvironment as SkyEnvironment_10 } from "@zcomponent/three/lib/components/environments/SkyEnvironment";
import { Sphere as Sphere_11 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { TeleportManager as TeleportManager_12 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TurnManager as TurnManager_13 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { XRRigVR as XRRigVR_14 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { XRCamera as XRCamera_15 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_16 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_17 } from "@zcomponent/three-webxr/lib/components/XRManager";

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
		Left_Controller: XRController_7 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_8 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_8 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_8 & {
			behaviors: {

			}
		},
		Mesh_GroupDeleteMe0: Group_3 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_7 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_9 & {
			behaviors: {

			}
		},
		Sky_Environment: SkyEnvironment_10 & {
			behaviors: {

			}
		},
		Sphere: Sphere_11 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_12 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_13 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_14 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_15 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_16 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_17 & {
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
