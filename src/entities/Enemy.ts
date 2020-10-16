import DynamicEntity from "./DynamicEntity";
import Player from "./Player";
abstract class Enemy extends DynamicEntity {
  private _allEnemies: any[];
  private _gamePlayer: Player;

  get gamePlayer(): Player {
    return this._gamePlayer;
  }
  set gamePlayer(player: Player) {
    this._gamePlayer = player;
  }
  get allEnemies(): any[] {
    return this._allEnemies;
  }
  set allEnemies(allEnemies: any[]) {
    this._allEnemies = allEnemies;
  }
}

export default Enemy;
