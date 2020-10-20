import Entity from "./Entity";
import StaticEntity from "./StaticEntity";

abstract class DynamicEntity extends Entity {
  private _speed: number;
  private _spritePosition: any;
  private _actualDirection: string;
  private _actualFrame: number = 0;
  private _staticEntities: StaticEntity[];

  constructor() {
    super();
  }

  public abstract render(
    context: CanvasRenderingContext2D,
    frames: number
  ): void;

  public abstract update(
    context: CanvasRenderingContext2D,
    frames: number
  ): void;

  get staticEntities(): StaticEntity[] {
    return this._staticEntities;
  }
  set staticEntities(staticEntities: StaticEntity[]) {
    this._staticEntities = staticEntities;
  }
  get speed(): number {
    return this._speed;
  }
  set speed(speed: number) {
    this._speed = speed;
  }
  get spritePosition(): any {
    return this._spritePosition;
  }
  set spritePosition(spritePosition: any) {
    this._spritePosition = spritePosition;
  }
  get actualDirection(): string {
    return this._actualDirection;
  }
  set actualDirection(actualDirection: string) {
    this._actualDirection = actualDirection;
  }

  get actualFrame(): number {
    return this._actualFrame;
  }
  set actualFrame(actualFrame: number) {
    this._actualFrame = actualFrame;
  }
}

export default DynamicEntity;
