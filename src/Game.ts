import Camera from "./camera/Camera";
import DynamicEntity from "./entities/DynamicEntity";
import Player from "./entities/Player";
import StaticEntity from "./entities/StaticEntity";
import Map from "./maps/Map";

class Game {
  private _map: Map;
  private _player: Player;
  private _staticEntities: Array<StaticEntity>;
  private _dynamicEntities: Array<DynamicEntity>;
  private _context: CanvasRenderingContext2D;
  private _camera: Camera;

  constructor(
    context: CanvasRenderingContext2D,
    map: Map,
    player: Player,
    dynamicEntities: Array<DynamicEntity>,
    staticcEntities: Array<StaticEntity>,
    camera: Camera
  ) {
    this._context = context;
    this._map = map;
    this._player = player;
    this._dynamicEntities = dynamicEntities;
    this._staticEntities = staticcEntities;
    this._camera = camera;
  }

  public run(frames: number): void {
    this.render(frames);
    this.update(frames);
  }
  update(frames: number) {
    this._player.update(this._context, frames);
    this._dynamicEntities.forEach((e) => {
      e.update(this._context, frames);
    });
    this._camera.move();
  }
  render(frames: number) {
    this._context.save();
    this._context.translate(-this._camera.x_axys, -this._camera.y_axys);
    this._map.render(this._context);

    this._staticEntities.forEach((e) => {
      e.render(this._context, frames);
    });
    this._player.render(this._context, frames);

    this._dynamicEntities.forEach((e) => {
      e.render(this._context, frames);
    });
    this._context.restore();
  }
}

export default Game;
