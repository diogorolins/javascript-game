import DogEnemy from "../entities/DogEnemy";
import StaticEntity from "../entities/StaticEntity";
import {
  sprite,
  width,
  heigth,
  spritePosition,
  spriteWidth,
  spriteHeight,
  initialPositions,
  speed,
} from "../properties/dogEnemyProperties";

class DogEnemyFactory {
  public static build(staticEntities: StaticEntity[]): DogEnemy {
    const dogImage = new Image();
    dogImage.src = sprite;

    const dogEnemy = new DogEnemy();
    dogEnemy.sprite = dogImage;
    dogEnemy.width = width;
    dogEnemy.height = heigth;
    dogEnemy.spritePosition = spritePosition;
    dogEnemy.spriteHeight = spriteHeight;
    dogEnemy.spriteWidth = spriteWidth;
    dogEnemy.allEnemies = initialPositions;
    dogEnemy.speed = speed;

    dogEnemy.staticEntities = staticEntities;

    return dogEnemy;
  }
}

export default DogEnemyFactory;
