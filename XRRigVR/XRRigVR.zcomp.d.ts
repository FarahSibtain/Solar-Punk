import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { ConeGeometry as ConeGeometry_0 } from "@zcomponent/three/lib/components/geometries/ConeGeometry";
import { MeshBasicMaterial as MeshBasicMaterial_1 } from "@zcomponent/three/lib/components/materials/MeshBasicMaterial";
import { Audio as Audio_2 } from "@zcomponent/core/lib/components/Audio";
import { Image360 as Image360_3 } from "@zcomponent/three/lib/components/Image360";
import { Group as Group_4 } from "@zcomponent/three/lib/components/Group";
import { XRController as XRController_5 } from "@zcomponent/three-webxr/lib/components/XRController";
import { RingGeometry as RingGeometry_6 } from "@zcomponent/three/lib/components/geometries/RingGeometry";
import { Mesh as Mesh_7 } from "@zcomponent/three/lib/components/meshes/Mesh";
import { TeleportManager as TeleportManager_8 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TeleportDistanceRestrictor as TeleportDistanceRestrictor_9 } from "../TeleportDistanceRestrictor";
import { TurnManager as TurnManager_10 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { WalkManager as WalkManager_11 } from "@zcomponent/three-webxr/lib/components/WalkManager";
import { XRRigVR as XRRigVR_12 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { HandMovementBehavior as HandMovementBehavior_13 } from "../HandMovementBehavior";
import { XRCamera as XRCamera_14 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_15 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_16 } from "@zcomponent/three-webxr/lib/components/XRManager";

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
		DeathZoneAudio: Audio_2 & {
			behaviors: {

			}
		},
		Environment: Image360_3 & {
			behaviors: {

			}
		},
		LeftHandPosition: Group_4 & {
			behaviors: {

			}
		},
		Left_Controller: XRController_5 & {
			behaviors: {

			}
		},
		RightHandPosition: Group_4 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_5 & {
			behaviors: {

			}
		},
		Ring_Geometry: RingGeometry_6 & {
			behaviors: {

			}
		},
		Ring_Material: MeshBasicMaterial_1 & {
			behaviors: {

			}
		},
		Teleport_Arrow: Mesh_7 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_8 & {
			behaviors: {
				0: TeleportDistanceRestrictor_9,
				TeleportDistanceRestrictor: TeleportDistanceRestrictor_9,
			}
		},
		Teleport_Ring: Mesh_7 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_10 & {
			behaviors: {

			}
		},
		Walk_Manager: WalkManager_11 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_12 & {
			behaviors: {
				0: HandMovementBehavior_13,
			}
		},
		XR_Camera: XRCamera_14 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_15 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_16 & {
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
