import DynamicEntity from "./entities/DynamicEntity";
import StaticEntity from "./entities/StaticEntity";
import Wall from "./entities/Wall";
import CameraFactory from "./factory/CameraFactory";
import HouseFactory from "./factory/HouseFactory";
import MapFactory from "./factory/MapFactory";
import PlayerFactory from "./factory/PlayerFactory";
import WallFactory from "./factory/WallFactory";
import Game from "./Game";
import IListner from "./inputs/IListner";
import KeyBoardListner from "./inputs/KeyBoardListner";
import { gameWidth, gameHeight } from "./properties/gameProperties";

const dynamicEnities: Array<DynamicEntity> = [];
const staticEnities: Array<StaticEntity> = [];

let frames: number = 0;
const commands: IListner = new KeyBoardListner();

const canvas = buildCanvas();
const context: CanvasRenderingContext2D = canvas.getContext("2d");
const wall = WallFactory.build();
const house = HouseFactory.build();
staticEnities.push(wall, house);
const map = MapFactory.build();
const gamePlayer = PlayerFactory.build(staticEnities);
const camera = CameraFactory.build(gamePlayer, map);
dynamicEnities.push(gamePlayer);

const game: Game = new Game(
  context,
  map,
  dynamicEnities,
  staticEnities,
  camera
);

commands.listen(gamePlayer);

function init() {
  game.run(frames);
  frames += 1;
  requestAnimationFrame(init);
}

function buildCanvas(): HTMLCanvasElement {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  canvas.height = gameHeight;
  canvas.width = gameWidth;
  return canvas;
}

init();
