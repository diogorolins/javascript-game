import House from "../entities/House";
import {
  sprite,
  spritePosition_x,
  spritePosition_y,
  height,
  width,
  spriteHeight,
  spriteWidth,
  positions,
  soundColision,
} from "../properties/houseProperties";

class HouseFactory {
  public static build(): House {
    const house = new House();

    const houseImage = new Image();
    houseImage.src = sprite;

    const houseSound = new Audio();
    houseSound.src = soundColision;

    house.positions = positions;
    house.spriteWidth = spriteWidth;
    house.spriteHeight = spriteHeight;
    house.colisionSound = houseSound;
    house.width = width;
    house.height = height;
    house.sprite = houseImage;
    house.x_axis = spritePosition_x;
    house.y_axis = spritePosition_y;
    return house;
  }
}

export default HouseFactory;
