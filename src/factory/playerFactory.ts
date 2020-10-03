import Player from "../entities/Player";
import {
  playerWidth,
  playerHeigth,
  sprite,
  spritePosition_x,
  spritePosition_y,
  initialPosition_x,
  initialPosition_y,
  playerSpeed,
} from "../properties/playerProperties";

class playerFactory {
  public static build(): Player {
    const playerImage = new Image();
    playerImage.src = sprite;
    const player = new Player();
    player.width = playerWidth;
    player.height = playerHeigth;
    player.sprite = playerImage;
    player.sprite_x = spritePosition_x;
    player.sprite_y = spritePosition_y;
    player.x_axis = initialPosition_x;
    player.y_axis = initialPosition_y;
    player.speed = playerSpeed;
    return player;
  }
}
export default playerFactory;
