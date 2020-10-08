import Wall from "../entities/Wall";
import {
  sprite,
  spritePosition_x,
  spritePosition_y,
  width,
  height,
  positions,
  spriteWidth,
  spriteHeight,
  soundColision,
} from "../properties/wallProperties";

class WallFactory {
  public static build() {
    const wall = new Wall();

    const wallImage = new Image();
    wallImage.src = sprite;
    const wallSound = new Audio();
    wallSound.src = soundColision;

    wall.colisionSound = wallSound;
    wall.positions = positions;
    wall.spriteWidth = spriteWidth;
    wall.spriteHeight = spriteHeight;
    wall.width = width;
    wall.height = height;
    wall.sprite = wallImage;
    wall.x_axis = spritePosition_x;
    wall.y_axis = spritePosition_y;

    return wall;
  }
}

export default WallFactory;
