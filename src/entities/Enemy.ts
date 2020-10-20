import DynamicEntity from "./DynamicEntity";
import Player from "./Player";
abstract class Enemy extends DynamicEntity {
  private _gamePlayer: Player;
  private _enemyType: string;
  private _damage: number;

  get damage(): number {
    return this._damage;
  }

  set damage(damage: number) {
    this._damage = damage;
  }

  get enemyType(): string {
    return this._enemyType;
  }
  set enemyType(enemyType: string) {
    this._enemyType = enemyType;
  }

  get gamePlayer(): Player {
    return this._gamePlayer;
  }
  set gamePlayer(player: Player) {
    this._gamePlayer = player;
  }
}

export default Enemy;
