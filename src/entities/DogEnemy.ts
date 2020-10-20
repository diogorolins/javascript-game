import Enemy from "./Enemy";

class DogEnemy extends Enemy {
  private _stepSound: any;
  private _direction: string;
  private _signal: string;
  private frame = 0;

  get signal(): string {
    return this._signal;
  }

  set signal(signal: string) {
    this._signal = signal;
  }

  get direction(): string {
    return this._direction;
  }

  set direction(direction: string) {
    this._direction = direction;
  }

  get stepSound(): any {
    return this._stepSound;
  }
  set stepSound(stepSound: any) {
    this._stepSound = stepSound;
  }

  private draw(context: CanvasRenderingContext2D, frames: number): void {
    if (frames % 8 === 0) {
      this.frame += 1;

      if (this.frame === 4) {
        this.frame = 0;
      }
    }
    context.drawImage(
      this.sprite,
      this.spritePosition[this._direction][this.frame].x,
      this.spritePosition[this._direction][this.frame].y,
      this.spriteWidth,
      this.spriteHeight,
      this.x_axis,
      this.y_axis,
      this.width,
      this.height
    );
    this.walk();
  }

  public render(context: CanvasRenderingContext2D, frames: number): void {
    this.draw(context, frames);
  }
  public update(context: CanvasRenderingContext2D, frames: number): void {}

  private walk(): void {
    if (!this.hasAnyColision()) {
      this.moveEnemy();
    } else {
      this.changeDirection();
    }
  }

  private hasAnyColision() {
    return this.haveColisionWithStaticEllements();
  }

  private haveColisionWithPlayer() {
    return (
      this.gamePlayer.x_axis + this.gamePlayer.width > this.x_axis &&
      this.gamePlayer.x_axis < this.x_axis + this.width &&
      this.gamePlayer.y_axis + this.gamePlayer.height > this.y_axis &&
      this.gamePlayer.y_axis < this.y_axis + this.height
    );
  }

  private haveColisionWithStaticEllements() {
    let colision: any = [];
    this.staticEntities.forEach((s) => {
      colision.push(
        s.checkColision(
          eval(`${this.x_axis} ${this._signal} ${this.speed}`),
          this.y_axis,
          this.width,
          this.height
        )
      );
    });
    return colision.includes(true);
  }

  private moveEnemy() {
    this.x_axis = eval(`${this.x_axis} ${this._signal} ${this.speed}`);
  }

  private changeDirection(): void {
    this.changeSign();
    this.moveFromWall();
    this.changeFaceDirection();
  }

  private changeFaceDirection(): void {
    if (this._direction === "ArrowRight") this._direction = "ArrowLeft";
    else this._direction = "ArrowRight";
  }

  private changeSign(): void {
    if (this._signal === "-") this._signal = "+";
    else this._signal = "-";
  }

  private moveFromWall(): void {
    this.x_axis = eval(`${this.x_axis} ${this._signal}  5`);
  }
}

export default DogEnemy;
