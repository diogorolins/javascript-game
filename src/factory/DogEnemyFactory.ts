import DogEnemy from "../entities/DogEnemy";
import Player from "../entities/Player";
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
  damage,
} from "../properties/dogEnemyProperties";
import { enemyType } from "../properties/enemyType";

class DogEnemyFactory {
  public static build(
    staticEntities: StaticEntity[],
    gamePlayer: Player
  ): DogEnemy[] {
    const dogImage = new Image();
    dogImage.src = sprite;
    const enemies: any = [];

    initialPositions.forEach((e) => {
      const dogEnemy = new DogEnemy();
      dogEnemy.sprite = dogImage;
      dogEnemy.width = width;
      dogEnemy.height = heigth;
      dogEnemy.spritePosition = spritePosition;
      dogEnemy.spriteHeight = spriteHeight;
      dogEnemy.spriteWidth = spriteWidth;
      dogEnemy.speed = speed;
      dogEnemy.gamePlayer = gamePlayer;
      dogEnemy.x_axis = e.x;
      dogEnemy.y_axis = e.y;
      dogEnemy.signal = e.signal;
      dogEnemy.direction = e.direction;
      dogEnemy.staticEntities = staticEntities;
      dogEnemy.enemyType = enemyType.dogEnemy;
      dogEnemy.damage = damage;
      enemies.push(dogEnemy);
    });

    return enemies;
  }
}

export default DogEnemyFactory;
