import DynamicEntity from "./entities/DynamicEntity";
import StaticEntity from "./entities/StaticEntity";
import CameraFactory from "./factory/CameraFactory";
import DogEnemyFactory from "./factory/dogEnemyFactory";
import HouseFactory from "./factory/HouseFactory";
import MapFactory from "./factory/MapFactory";
import PlayerFactory from "./factory/PlayerFactory";
import WallFactory from "./factory/WallFactory";
import Game from "./Game";
import IListner from "./inputs/IListner";
import KeyBoardListner from "./inputs/KeyBoardListner";
import { gameWidth, gameHeight } from "./properties/gameProperties";

const button: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("buttonStart")
);
button.addEventListener("click", (event) => {
  init();
  music.addEventListener("canplaythrough", (event) => {});
  music.loop = true;
  music.play();
  button.disabled = true;
});

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

const dogEnemy = DogEnemyFactory.build(staticEnities);
dynamicEnities.push(dogEnemy);

const game: Game = new Game(
  context,
  map,
  dynamicEnities,
  staticEnities,
  camera
);

const music = new Audio();
music.src = "./src/assets/sounds/music.mp3";

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
