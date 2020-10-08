import DynamicEntity from "./DynamicEntity";
abstract class Enemy extends DynamicEntity {
  private _allEnemies: any[];

  get allEnemies(): any[] {
    return this._allEnemies;
  }

  set allEnemies(allEnemies: any[]) {
    this._allEnemies = allEnemies;
  }
}

export default Enemy;
