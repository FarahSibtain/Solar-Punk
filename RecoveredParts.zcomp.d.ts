import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Group as Group_0 } from "@zcomponent/three/lib/components/Group";
import { GLTF as GLTF_1 } from "@zcomponent/three/lib/components/models/GLTF";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Plants: Group_0 & {
			behaviors: {

			}
		},
		Busch_v1_glb: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb4: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb3: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb6: GLTF_1 & {
			behaviors: {

			}
		},
		Pflanze_2v1_glb: GLTF_1 & {
			behaviors: {

			}
		},
		Plants_2: Group_0 & {
			behaviors: {

			}
		},
		Busch_v1_glb7: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb8: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb9: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb10: GLTF_1 & {
			behaviors: {

			}
		},
		Pflanze_2v1_glb2: GLTF_1 & {
			behaviors: {

			}
		},
		Plants_4: Group_0 & {
			behaviors: {

			}
		},
		Busch_v1_glb15: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb16: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb17: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb18: GLTF_1 & {
			behaviors: {

			}
		},
		Pflanze_2v1_glb4: GLTF_1 & {
			behaviors: {

			}
		},
		Plants_3: Group_0 & {
			behaviors: {

			}
		},
		Busch_v1_glb11: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb12: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb13: GLTF_1 & {
			behaviors: {

			}
		},
		Busch_v1_glb14: GLTF_1 & {
			behaviors: {

			}
		},
		Pflanze_2v1_glb3: GLTF_1 & {
			behaviors: {

			}
		},
		Fishes: Group_0 & {
			behaviors: {

			}
		},
		Fisch: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_2: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_3: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_4: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_5: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_6: GLTF_1 & {
			behaviors: {

			}
		},
		Fishes_2: Group_0 & {
			behaviors: {

			}
		},
		Fisch_7: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_8: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_9: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_10: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_11: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_12: GLTF_1 & {
			behaviors: {

			}
		},
		Fishes_3: Group_0 & {
			behaviors: {

			}
		},
		Fisch_13: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_14: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_15: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_16: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_17: GLTF_1 & {
			behaviors: {

			}
		},
		Fisch_18: GLTF_1 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

	}};

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;

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
}

export default Comp;
