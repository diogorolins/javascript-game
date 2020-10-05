import Player from "../entities/Player";
import {
  playerWidth,
  playerHeigth,
  sprite,
  spritePosition,
  initialPosition_x,
  initialPosition_y,
  playerSpeed,
} from "../properties/playerProperties";

class playerFactory {
  public static build(): Player {
    const playerImage = new Image();
    playerImage.src = sprite;
    const player: Player = new Player();
    player.width = playerWidth;
    player.height = playerHeigth;
    player.sprite = playerImage;
    player.spritePosition = spritePosition;
    player.x_axis = initialPosition_x;
    player.y_axis = initialPosition_y;
    player.speed = playerSpeed;
    player.originalSpeed = playerSpeed;
    return player;
  }
}
export default playerFactory;
