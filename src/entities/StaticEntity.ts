import Entity from "./Entity";

abstract class StaticEntity extends Entity {
  private _sprite_x: number;
  private _sprite_y: number;

  get sprite_x(): number {
    return this._sprite_x;
  }
  set sprite_x(sprite_x: number) {
    this._sprite_x = sprite_x;
  }
  get sprite_y(): number {
    return this._sprite_y;
  }
  set sprite_y(sprite_y: number) {
    this._sprite_y = sprite_y;
  }
}

export default StaticEntity;
