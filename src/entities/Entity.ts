import StaticEntity from "./StaticEntity";

abstract class Entity {
  private _sprite: HTMLImageElement;
  private _spriteWidth: number;
  private _spriteHeight: number;
  private _width: number;
  private _height: number;
  private _x_axis: number;
  private _y_axis: number;
  constructor() {}

  get sprite(): HTMLImageElement {
    return this._sprite;
  }
  set sprite(sprite: HTMLImageElement) {
    this._sprite = sprite;
  }
  get spriteWidth(): number {
    return this._spriteWidth;
  }
  set spriteWidth(spriteWidth: number) {
    this._spriteWidth = spriteWidth;
  }
  get spriteHeight(): number {
    return this._spriteHeight;
  }
  set spriteHeight(spriteHeight: number) {
    this._spriteHeight = spriteHeight;
  }
  get width(): number {
    return this._width;
  }
  set width(width: number) {
    this._width = width;
  }
  get height(): number {
    return this._height;
  }
  set height(height: number) {
    this._height = height;
  }
  get x_axis(): number {
    return this._x_axis;
  }
  set x_axis(x_axis: number) {
    this._x_axis = x_axis;
  }
  get y_axis(): number {
    return this._y_axis;
  }
  set y_axis(y_axis: number) {
    this._y_axis = y_axis;
  }
}

export default Entity;
