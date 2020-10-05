import Entity from "./Entity";

abstract class DynamicEntity extends Entity {
  private _speed: number;
  private _spritePosition: any;
  private _actualDirection: string = "ArrowRight";
  private _actualFrame: number = 0;

  constructor() {
    super();
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
