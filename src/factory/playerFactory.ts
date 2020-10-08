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
} from "../properties/playerProperties";

class PlayerFactory {
  public static build(staticEntities: StaticEntity[]): Player {
    const playerImage = new Image();
    playerImage.src = sprite;

    const playerStepSound = new Audio();
    playerStepSound.src = footStepSound;
    const playerSpeedSound = new Audio();
    playerSpeedSound.src = speedSound;

    const player: Player = new Player();
    player.speedSound = playerSpeedSound;
    player.stepSound = playerStepSound;
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
}
export default PlayerFactory;
