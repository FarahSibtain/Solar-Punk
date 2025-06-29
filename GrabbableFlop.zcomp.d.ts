import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { RigidBody as RigidBody_1 } from "@zcomponent/physics/lib/behaviors/RigidBody";
import { Collider as Collider_2 } from "@zcomponent/physics/lib/components/Colliders/Collider";
import { MeshStandardMaterial as MeshStandardMaterial_3 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { RigidbodyEventEmitter as RigidbodyEventEmitter_4 } from "@zcomponent/physics/lib/components/BodyEventEmitter";
import { PlayLayerClip as PlayLayerClip_5 } from "@zcomponent/core/lib/behaviors/PlayLayerClip";
import { SetLayerOff as SetLayerOff_6 } from "@zcomponent/core/lib/behaviors/SetLayerOff";
import { GLTF as GLTF_7 } from "@zcomponent/three/lib/components/models/GLTF";

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
				0: RigidBody_1,
				RigidBody: RigidBody_1,
			}
		},
		Collider: Collider_2 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_3 & {
			behaviors: {

			}
		},
		RigidbodyEventEmitter: RigidbodyEventEmitter_4 & {
			behaviors: {
				0: PlayLayerClip_5,
				PlayLayerClip: PlayLayerClip_5,
				1: SetLayerOff_6,
				SetLayerOff: SetLayerOff_6,
				2: SetLayerOff_6,
				SetLayerOff0: SetLayerOff_6,
				3: PlayLayerClip_5,
				PlayLayerClip1: PlayLayerClip_5,
			}
		},
		Ein_Flopv10_glb: GLTF_7 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		Layer_10: Layer & { clips: {
			InRange0: LayerClip;
			PickedUp0: LayerClip;
			Closest0: LayerClip;
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
