import Player from "../entities/Player";
import Map from "../maps/Map";

class Camera {
  private _x_axys: number;
  private _y_axys: number;
  private _width: number;
  private _height: number;
  private _border: number;
  private _player: Player;
  private _map: Map;

  public move() {   
    this.moveLeft();
    this.moveRight();    
    this.moveUp();    
    this.moveDown();   
  }

  moveDown() {
    if (this._player.y_axis + this._player.height > this.getDownEdge()) {
      this._y_axys =
        this._player.y_axis +
        this._player.height -
        this._height * (1 - this._border);
    }
    if (this.y_axys + this.height > this.map.height) {
      this.y_axys = this.map.height - this.height;
    }
  }

  moveUp() {
    if (this._player.y_axis < this.getUpEdge()) {
      this._y_axys = this._player.y_axis - this._height * this._border;
    }
    if (this.y_axys < 0) {
      this.y_axys = 0;
    }
  }

  moveRight() {
    if (this._player.x_axis + this._player.width > this.getRightEdge()) {
      this._x_axys =
        this._player.x_axis +
        this._player.width -
        this._width * (1 - this._border);
    }
    if (this.x_axys + this.width > this.map.width) {
      this.x_axys = this.map.width - this.width;
    }
  }

  public moveLeft(){
     if (this._player.x_axis < this.getLeftEdge()) {
      this._x_axys = this._player.x_axis - this._width * this._border;
    }
    if (this.x_axys < 0) {
      this.x_axys = 0;
    }
  }

  public getLeftEdge(): number {
    return this._x_axys + this._width * this._border;
  }

  public getRightEdge(): number {
    return this._x_axys + this._width * (1 - this._border);
  }

  public getUpEdge(): number {
    return this._y_axys + this._height * this._border;
  }
  
  public getDownEdge(): number {
    return this._y_axys + this._height * (1 - this._border);
  }

  get map(): Map {
    return this._map;
  }
  set map(map: Map) {
    this._map = map;
  }

  get player(): Player {
    return this._player;
  }

  set player(player: Player) {
    this._player = player;
  }

  get border(): number {
    return this._border;
  }
  set border(border: number) {
    this._border = border;
  }

  get x_axys(): number {
    return this._x_axys;
  }
  set x_axys(x_axys: number) {
    this._x_axys = x_axys;
  }

  get y_axys(): number {
    return this._y_axys;
  }
  set y_axys(y_axys: number) {
    this._y_axys = y_axys;
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
}
export default Camera;
