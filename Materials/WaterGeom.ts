import { ContextManager, registerLoadable, Observable } from "@zcomponent/core";
import { Group } from "@zcomponent/three/lib/components/Group";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water.js";
import { useOnBeforeRender } from "@zcomponent/core";

interface ConstructorProps {}

/**
 * @zcomponent
 * @zicon water
 */
export class WaterGeom extends Group {
  /**
   * @zui
   * @zgroup Water Properties
   * @ztype proportion
   * @zdefault 1.0
   */
  public distortionScale = new Observable(1.0);

  /**
   * @zui
   * @zgroup Water Properties
   * @zdefault 5
   */
  public size = new Observable(5);

  /**
   * @zui
   * @zgroup Water Properties
   * @zgrouppriority 100
   * @ztype color-norm-rgb
   * @zdefault [0.25, 0.51, 0.7]
   */
  public waterColor = new Observable<[r: number, g: number, b: number]>([
    0.25, 0.51, 0.7,
  ]);

  /**
   * @zui
   * @zgroup Water Properties
   * @zdefault true
   * @ztype boolean
   */
  public animate = new Observable(true);

  /**
   * @zui
   * @zgroup Water Properties
   * @zdefault 2
   * @ztype number
   */
  public animationSpeed = new Observable(2); 

  /**
   * @zui
   * @zgroup Water Properties
   * @zdefault Circular
   * @ztype options
   * @zvalues ["Circular", "Square"]
   */
  public shape = new Observable<"Circular" | "Square">("Circular");

  private water: Water;
  private readonly speedMultiplier = 0.0001; 

  constructor(contextManager: ContextManager, constructorProps: ConstructorProps) {
    super(contextManager, constructorProps);

    registerLoadable(contextManager, this._load());

    this.register(useOnBeforeRender(contextManager), (dt) => {
      if (this.animate.value) {
        if (this.water.material.uniforms) {
          this.water.material.uniforms["time"].value +=
            dt * this.animationSpeed.value * this.speedMultiplier;
        }
      }
    });

    this.register(this.shape, (newShape) => {
      this.updateGeometry(newShape);
    });
  }

  private async _load() {
    const waterGeometry = this.createGeometry(this.shape.value);

    const waterNormals = new THREE.TextureLoader().load(
      new URL("./waternormals.jpg", import.meta.url).href,
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }
    );

    this.water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: waterNormals,
      waterColor: 0x0b5394,
      distortionScale: 0.7,
      fog: false,
    });

    this.water.rotation.x = -Math.PI / 2;
    this.element.add(this.water);

    this.register(this.distortionScale, (value) => {
      this.water.material.uniforms.distortionScale.value = value;
    });

    this.register(this.size, (value) => {
      this.water.scale.set(value, value, 1);
    });

    this.register(this.waterColor, ([r, g, b]) => {
      this.water.material.uniforms.waterColor.value.setRGB(r, g, b);
    });
  }

  private createGeometry(shape: "Circular" | "Square") {
    if (shape === "Circular") {
      return new THREE.CircleGeometry(10, 64); //Circle
    } else {
      return new THREE.PlaneGeometry(20, 20); //Square
    }
  }

  private updateGeometry(shape: "Circular" | "Square") {
    const newGeometry = this.createGeometry(shape);

    this.water.geometry.dispose();

    this.water.geometry = newGeometry;
  }

  public dispose() {
    return super.dispose();
  }
}
