import DynamicEntity from "./entities/DynamicEntity";
import StaticEntity from "./entities/StaticEntity";
import Map from "./maps/Map";

class Game {
  private _map: Map;
  private _staticEntities: Array<StaticEntity>;
  private _dynamicEntities: Array<DynamicEntity>;
  private _context: CanvasRenderingContext2D;

  constructor(
    context: CanvasRenderingContext2D,
    map: Map,
    dynamicEntities: Array<DynamicEntity>
  ) {
    this._context = context;
    this._map = map;
    this._dynamicEntities = dynamicEntities;
  }

  public run(): void {
    this.render();
    this.update();
  }
  update() {}
  render() {
    this._map.render(this._context);
    this._dynamicEntities.forEach((e) => {
      e.render(this._context);
    });
  }
}

export default Game;
