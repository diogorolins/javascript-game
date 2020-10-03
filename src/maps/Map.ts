abstract class Map {
  private _width: number;
  private _height: number;
  private _sprite: HTMLImageElement;
  private _canvasWidth: number;
  private _canvasHeight: number;
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
  get sprite(): HTMLImageElement {
    return this._sprite;
  }
  set sprite(sprite: HTMLImageElement) {
    this._sprite = sprite;
  }
  get canvasWidth(): number {
    return this._canvasWidth;
  }
  set canvasWidth(canvasWidth: number) {
    this._canvasWidth = canvasWidth;
  }
  get canvasHeight(): number {
    return this._canvasHeight;
  }
  set canvasHeight(canvasWidth: number) {
    this._canvasHeight = canvasWidth;
  }

  public abstract render(context: any): void;
  public abstract update(): void;
}

export default Map;
