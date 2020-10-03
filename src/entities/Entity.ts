abstract class Entity {
  private _width: number;
  private _height: number;
  private _x_axis: number;
  private _y_axis: number;
  private _sprite: HTMLImageElement;
  private _sprite_x: number;
  private _sprite_y: number;

  constructor() {}

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
  get sprite(): HTMLImageElement {
    return this._sprite;
  }
  set sprite(sprite: HTMLImageElement) {
    this._sprite = sprite;
  }
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
  public abstract render(context: CanvasRenderingContext2D): void;
  public abstract update(): void;
}

export default Entity;
