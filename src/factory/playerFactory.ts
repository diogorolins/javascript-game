import DynamicEntity from "../entities/DynamicEntity";
import Enemy from "../entities/Enemy";
import Player from "../entities/Player";
import StaticEntity from "../entities/StaticEntity";
import {
  playerWidth,
  playerHeigth,
  sprite,
  spritePosition,
  initialPosition_x,
  initialPosition_y,
  playerSpeed,
  playerSpriteWidth,
  playeSpriterHeigth,
  speedSound,
  footStepSound,
  enemyColision,
} from "../properties/playerProperties";

class PlayerFactory {
  public static build(staticEntities: StaticEntity[]): Player {
    const playerImage = new Image();
    playerImage.src = sprite;

    const playerStepSound = new Audio();
    playerStepSound.src = footStepSound;
    const playerSpeedSound = new Audio();
    playerSpeedSound.src = speedSound;
    const enemyColisionSound = new Audio();
    enemyColisionSound.src = enemyColision;

    const player: Player = new Player();
    player.speedSound = playerSpeedSound;
    player.stepSound = playerStepSound;
    player.enemyColisionSound = enemyColisionSound;
    player.width = playerWidth;
    player.height = playerHeigth;
    player.sprite = playerImage;
    player.spritePosition = spritePosition;
    player.x_axis = initialPosition_x;
    player.y_axis = initialPosition_y;
    player.speed = playerSpeed;
    player.spriteWidth = playerSpriteWidth;
    player.spriteHeight = playeSpriterHeigth;
    player.originalSpeed = playerSpeed;
    player.staticEntities = staticEntities;
    player.actualDirection = "ArrowRight";
    return player;
  }

  public static insertEnemies(
    player: Player,
    dynamicEntities: DynamicEntity[]
  ) {
    const enemies = dynamicEntities.filter((e) => typeof Enemy);
    player.enemies = enemies;
  }
}
export default PlayerFactory;
