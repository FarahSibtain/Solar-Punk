import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { default as Button_zcomp_0 } from "./Button/Button.zcomp";
import { MyButtonBehaviour as MyButtonBehaviour_1 } from "./MyButtonBehaviour";
import { Group as Group_2 } from "@zcomponent/three/lib/components/Group";
import { Text as Text_3 } from "@zcomponent/three/lib/components/text/Text";
import { MeshStandardMaterial as MeshStandardMaterial_4 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { Plane as Plane_5 } from "@zcomponent/three/lib/components/meshes/Plane";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		ButtonBillionaire: Button_zcomp_0 & {
			behaviors: {
				0: MyButtonBehaviour_1,
				MyButtonBehaviour: MyButtonBehaviour_1,
			}
		},
		ButtonCAP: Button_zcomp_0 & {
			behaviors: {
				0: MyButtonBehaviour_1,
				MyButtonBehaviour: MyButtonBehaviour_1,
			}
		},
		ButtonEP: Button_zcomp_0 & {
			behaviors: {
				0: MyButtonBehaviour_1,
				MyButtonBehaviour: MyButtonBehaviour_1,
			}
		},
		ButtonEduP: Button_zcomp_0 & {
			behaviors: {
				0: MyButtonBehaviour_1,
				MyButtonBehaviour: MyButtonBehaviour_1,
			}
		},
		ButtonGP: Button_zcomp_0 & {
			behaviors: {
				0: MyButtonBehaviour_1,
				MyButtonBehaviour: MyButtonBehaviour_1,
			}
		},
		ButtonHP: Button_zcomp_0 & {
			behaviors: {
				0: MyButtonBehaviour_1,
				MyButtonBehaviour: MyButtonBehaviour_1,
			}
		},
		ButtonSAT: Button_zcomp_0 & {
			behaviors: {
				0: MyButtonBehaviour_1,
				MyButtonBehaviour: MyButtonBehaviour_1,
			}
		},
		ButtonStudent0: Button_zcomp_0 & {
			behaviors: {
				0: MyButtonBehaviour_1,
				MyButtonBehaviour: MyButtonBehaviour_1,
			}
		},
		Buttons: Group_2 & {
			behaviors: {

			}
		},
		Hello_Text: Text_3 & {
			behaviors: {

			}
		},
		Red_BackgroundMaterial: MeshStandardMaterial_4 & {
			behaviors: {

			}
		},
		Text_Background: Plane_5 & {
			behaviors: {

			}
		},
		UI: Group_2 & {
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
