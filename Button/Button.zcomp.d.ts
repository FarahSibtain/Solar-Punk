import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Image as Image_0 } from "@zcomponent/three/lib/components/Image";
import { Group as Group_1 } from "@zcomponent/three/lib/components/Group";
import { OverrideOpacity as OverrideOpacity_2 } from "@zcomponent/three/lib/behaviors/OverrideOpacity";
import { ActivateState as ActivateState_3 } from "@zcomponent/core/lib/behaviors/ActivateState";
import { SetLayerOff as SetLayerOff_4 } from "@zcomponent/core/lib/behaviors/SetLayerOff";
import { EmitComponentPropEvent as EmitComponentPropEvent_5 } from "@zcomponent/core/lib/behaviors/EmitComponentPropEvent";
import { Text as Text_6 } from "@zcomponent/three/lib/components/text/Text";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Button_Background: Image_0 & {
			behaviors: {

			}
		},
		Button_Group: Group_1 & {
			behaviors: {
				0: OverrideOpacity_2,
				OverrideOpacity: OverrideOpacity_2,
				1: ActivateState_3,
				ActivateState: ActivateState_3,
				2: SetLayerOff_4,
				SetLayerOff: SetLayerOff_4,
				3: SetLayerOff_4,
				SetLayerOff0: SetLayerOff_4,
				4: EmitComponentPropEvent_5,
				EmitComponentPropEvent: EmitComponentPropEvent_5,
			}
		},
		Button_Text: Text_6 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		Button: Layer & { clips: {
			Tapped: LayerClip;
		}};
	}};

	/**
	 * @zprop
	 * @zgroup Button
	 * @zgrouppriority 30
	 */
	public onClick: Event<[]>;

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
	 * The text to show in the button.
	 * 
	 * @zprop
	 * @zdefault "Button"
	 * @zgroup Button
	 * @zgrouppriority 30
	 * @ztype text-multiline
	 */
	public text: Observable<string>;

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
