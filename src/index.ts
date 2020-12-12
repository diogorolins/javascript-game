import DogEnemy from "./entities/DogEnemy";
import DynamicEntity from "./entities/DynamicEntity";
import StaticEntity from "./entities/StaticEntity";
import CameraFactory from "./factory/CameraFactory";
import DogEnemyFactory from "./factory/DogEnemyFactory";
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
const button: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("buttonStart")
);
let frames: number = 0;
const commands: IListner = new KeyBoardListner();
const context: CanvasRenderingContext2D = buildCanvas().getContext("2d");

button.addEventListener("click", (event) => {
  playGameSound();
  initGame();
  button.disabled = true;
});

const map = MapFactory.build();

const wall = WallFactory.build();
const house = HouseFactory.build();
staticEnities.push(wall, house);

const gamePlayer = PlayerFactory.build(staticEnities);
const dogEnemy: DogEnemy[] = <DogEnemy[]>(
  DogEnemyFactory.build(staticEnities, gamePlayer)
);
dogEnemy.forEach((e: DogEnemy) => {
  dynamicEnities.push(e);
});

PlayerFactory.insertEnemies(gamePlayer, dynamicEnities);

const camera = CameraFactory.build(gamePlayer, map);

const game: Game = new Game(
  context,
  map,
  gamePlayer,
  dynamicEnities,
  staticEnities,
  camera
);

commands.listen(gamePlayer);

function initGame() {
  game.run(frames);
  frames += 1;
  requestAnimationFrame(initGame);
}

function playGameSound() {
  const music = new Audio();
  music.src = "./src/assets/sounds/music.mp3";
  music.addEventListener("canplaythrough", (event) => {});
  music.loop = true;
  music.play();
}

function buildCanvas(): HTMLCanvasElement {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  canvas.height = gameHeight;
  canvas.width = gameWidth;
  return canvas;
}
