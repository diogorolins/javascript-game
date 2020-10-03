import Entity from "./Entity";

abstract class DynamicEntity extends Entity {
  private _speed: number;

  constructor() {
    super();
  }

  get speed(): number {
    return this._speed;
  }
  set speed(speed: number) {
    this._speed = speed;
  }
}

export default DynamicEntity;
