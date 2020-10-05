import DynamicEntity from "./entities/DynamicEntity";
import mapFactory from "./factory/mapFactory";
import playerFactory from "./factory/playerFactory";
import Game from "./Game";
import KeyListner from "./inputs/KeyListner";
import { gameWidth, gameHeight } from "./properties/canvasProperties";

const dynamicEnities: Array<DynamicEntity> = [];
let frames: number = 0;
const canvas = buildCanvas();
const context: CanvasRenderingContext2D = canvas.getContext("2d");
const map = mapFactory.build();
const gamePlayer = playerFactory.build();

dynamicEnities.push(gamePlayer);

const game: Game = new Game(context, map, dynamicEnities);
KeyListner.listen(gamePlayer);
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
