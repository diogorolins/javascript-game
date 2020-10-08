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
    this.allEnemies.forEach((e) => {
      if (frames % 8 === 0) {
        e.f += 1;

        if (e.f === 4) {
          e.f = 0;
        }
      }
      context.drawImage(
        this.sprite,
        this.spritePosition[e.d][e.f].x,
        this.spritePosition[e.d][e.f].y,
        this.spriteWidth,
        this.spriteHeight,
        e.x,
        e.y,
        this.width,
        this.height
      );
      this.walk(e);
    });
  }

  public render(context: CanvasRenderingContext2D, frames: number): void {
    this.draw(context, frames);
  }
  public update(context: CanvasRenderingContext2D): void {}

  private walk(e: any): void {
    let colision: any = [];

    this.staticEntities.forEach((s) => {
      colision.push(
        s.checkColision(
          eval(`${e.x} ${e.s} ${this.speed}`),
          e.y,
          this.width,
          this.height
        )
      );
    });
    if (!colision.includes(true)) {
      e.x = eval(`${e.x} ${e.s} ${this.speed}`);
    } else {
      e.s = this.changeSign(e.s);
      e.x = this.moveFromWall(e.x, e.s);
      e.d = this.changeDirection(e.d);
    }
  }
  private changeDirection(direction: string): string {
    if (direction === "ArrowRight") return "ArrowLeft";
    return "ArrowRight";
  }

  private changeSign(sign: string): string {
    if (sign === "-") return "+";
    return "-";
  }

  private moveFromWall(position: number, signal: string): void {
    return eval(`${position} ${signal}  5`);
  }
}

export default DogEnemy;
