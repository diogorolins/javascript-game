import Enemy from "./Enemy";

class DogEnemy extends Enemy {
  private _stepSound: any;

  get stepSound(): any {
    return this._stepSound;
  }
  set stepSound(stepSound: any) {
    this._stepSound = stepSound;
  }

  private draw(context: CanvasRenderingContext2D, frames: number): void {
    this.allEnemies.forEach((enemy) => {
      if (frames % 8 === 0) {
        enemy.frame += 1;

        if (enemy.frame === 4) {
          enemy.frame = 0;
        }
      }
      context.drawImage(
        this.sprite,
        this.spritePosition[enemy.direction][enemy.frame].x,
        this.spritePosition[enemy.direction][enemy.frame].y,
        this.spriteWidth,
        this.spriteHeight,
        enemy.x,
        enemy.y,
        this.width,
        this.height
      );
      this.walk(enemy);
    });
  }

  public render(context: CanvasRenderingContext2D, frames: number): void {
    this.draw(context, frames);
  }
  public update(context: CanvasRenderingContext2D): void {}

  private walk(enemy: any): void {
    if (!this.hasAnyColision(enemy)) {
      this.moveEnemy(enemy);
    } else {
      this.changeDirection(enemy);
    }
  }

  private hasAnyColision(enemy: any) {
    return this.haveColisionWithStaticEllements(enemy); //||
    // this.haveColisionWithPlayer(enemy)
  }

  private haveColisionWithPlayer(enemy: any) {
    return (
      this.gamePlayer.x_axis + this.gamePlayer.width > enemy.x &&
      this.gamePlayer.x_axis < enemy.x + this.width &&
      this.gamePlayer.y_axis + this.gamePlayer.height > enemy.y &&
      this.gamePlayer.y_axis < enemy.y + this.height
    );
  }

  private haveColisionWithStaticEllements(enemy: any) {
    let colision: any = [];
    this.staticEntities.forEach((s) => {
      colision.push(
        s.checkColision(
          eval(`${enemy.x} ${enemy.signal} ${this.speed}`),
          enemy.y,
          this.width,
          this.height
        )
      );
    });
    return colision.includes(true);
  }

  private moveEnemy(enemy: any) {
    enemy.x = eval(`${enemy.x} ${enemy.signal} ${this.speed}`);
  }

  private changeDirection(enemy: DogEnemy): void {
    this.changeSign(enemy);
    this.moveFromWall(enemy);
    this.changeFaceDirection(enemy);
  }

  private changeFaceDirection(enemy: any): void {
    if (enemy.direction === "ArrowRight") enemy.direction = "ArrowLeft";
    else enemy.direction = "ArrowRight";
  }

  private changeSign(enemy: any): void {
    if (enemy.signal === "-") enemy.signal = "+";
    else enemy.signal = "-";
  }

  private moveFromWall(enemy: any): void {
    enemy.x = eval(`${enemy.x} ${enemy.signal}  5`);
  }
}

export default DogEnemy;
