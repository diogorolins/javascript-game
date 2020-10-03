import DynamicEntity from "./entities/DynamicEntity";
import Player from "./entities/Player";
import mapFactory from "./factory/mapFactory";
import playerFactory from "./factory/playerFactory";
import Game from "./Game";
import Map1 from "./maps/Map1";
import { gameWidth, gameHeight } from "./properties/canvasProperties";

const dynamicEnities: Array<DynamicEntity> = [];

const canvas = buildCanvas();
const context: CanvasRenderingContext2D = canvas.getContext("2d");
const map = mapFactory.build();
const gamePlayer = playerFactory.build();

dynamicEnities.push(gamePlayer);

const game: Game = new Game(context, map, dynamicEnities);

function init() {
  game.run();
  requestAnimationFrame(init);
}

function buildCanvas(): HTMLCanvasElement {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  canvas.height = gameHeight;
  canvas.width = gameWidth;
  return canvas;
}

init();
