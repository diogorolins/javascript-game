import DynamicEntity from "./entities/DynamicEntity";
import cameraFactory from "./factory/cameraFactory";
import mapFactory from "./factory/mapFactory";
import playerFactory from "./factory/playerFactory";
import Game from "./Game";
import IListner from "./inputs/IListner";
import KeyBoardListner from "./inputs/KeyBoardListner";
import { gameWidth, gameHeight } from "./properties/gameProperties";

const dynamicEnities: Array<DynamicEntity> = [];
let frames: number = 0;
const commands: IListner = new KeyBoardListner();
const canvas = buildCanvas();
const context: CanvasRenderingContext2D = canvas.getContext("2d");
const map = mapFactory.build();
const gamePlayer = playerFactory.build();
const camera = cameraFactory.build(gamePlayer, map);

dynamicEnities.push(gamePlayer);

const game: Game = new Game(context, map, dynamicEnities, camera);
commands.listen(gamePlayer);

function init() {
  clearScreen();
  game.run(frames);
  frames += 1;
  requestAnimationFrame(init);
}

function clearScreen() {
  context.fillStyle = "#087050";
  context.fillRect(0, 0, gameWidth, gameHeight);
}

function buildCanvas(): HTMLCanvasElement {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  canvas.height = gameHeight;
  canvas.width = gameWidth;
  return canvas;
}

init();
