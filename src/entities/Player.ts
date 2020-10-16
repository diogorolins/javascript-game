import DynamicEntity from "./DynamicEntity";

class Player extends DynamicEntity {
  private _actions: any = {};
  private _originalSpeed: number;
  private _speedSound: any;
  private _stepSound: any;
  private _enemyColisionSound: any;
  private _enemies: any[];

  public render(context: CanvasRenderingContext2D, frames: number): void {
    let actualSpritePosition: any = this.spritePosition[this.actualDirection][
      this.actualFrame
    ];

    if (this.checkIfMove()) {
      if (frames % 8 === 0) {
        this.moveFrame();
        this.playSound(this._stepSound);
        this.resetFrameLoop();
      }
    }
    this.draw(context, actualSpritePosition);
  }

  private resetFrameLoop() {
    if (this.actualFrame > 3) {
      this.actualFrame = 0;
    }
  }
  private moveFrame() {
    this.actualFrame += 1;
  }

  private checkIfMove(): boolean {
    if (
      !this._actions.ArrowUp &&
      !this._actions.ArrowDown &&
      !this._actions.ArrowLeft &&
      !this._actions.ArrowRight
    ) {
      return false;
    }
    return true;
  }

  private draw(context: CanvasRenderingContext2D, actualSpritePosition: any) {
    context.drawImage(
      this.sprite,
      actualSpritePosition.x,
      actualSpritePosition.y,
      this.spriteWidth,
      this.spriteHeight,
      this.x_axis,
      this.y_axis,
      this.width,
      this.height
    );
  }

  public update(context: CanvasRenderingContext2D): void {
    if (this.checkEnemiesColision()) {
      this.actualFrame = 4;
      this.playSound(this._enemyColisionSound);
    }
    this.checkActions();
  }

  private checkActions() {
    if (this._actions.ArrowUp) this.moveUp();
    if (this._actions.ArrowDown) this.moveDown();
    if (this._actions.ArrowLeft) this.moveLeft();
    if (this._actions.ArrowRight) this.moveRight();

    if (this._actions.a) {
      this.increaseSpeed();
    } else {
      this.speed = this._originalSpeed;
    }
  }

  private moveUp() {
    if (!this.checkStaticColision(this.x_axis, this.y_axis - this.speed))
      this.y_axis = this.y_axis - this.speed;
  }

  private moveDown() {
    if (!this.checkStaticColision(this.x_axis, this.y_axis + this.speed))
      this.y_axis = this.y_axis + this.speed;
  }
  private moveLeft() {
    if (!this.checkStaticColision(this.x_axis - this.speed, this.y_axis))
      this.x_axis = this.x_axis - this.speed;
    this.changeActualDirection("ArrowLeft");
  }

  private moveRight() {
    if (!this.checkStaticColision(this.x_axis + this.speed, this.y_axis))
      this.x_axis = this.x_axis + this.speed;
    this.changeActualDirection("ArrowRight");
  }

  private checkStaticColision(x: number, y: number): any {
    let colision: any = [];
    this.staticEntities.forEach((s) => {
      colision.push(s.checkColision(x, y, this.width, this.height));
    });
    return colision.includes(true);
  }

  private checkEnemiesColision() {
    const colision = this._enemies.map((e) => {
      return e.allEnemies.filter((enemy: any) => {
        return this.checkColisionWithEachEnemy(enemy);
      });
    });

    return colision[0].length;
  }

  private checkColisionWithEachEnemy(enemy: any) {
    return (
      this.x_axis + this.width > enemy.x &&
      this.x_axis < enemy.x + this.width &&
      this.y_axis + this.height > enemy.y &&
      this.y_axis < enemy.y + this.height
    );
  }

  private changeActualDirection(direction: string): void {
    this.actualDirection = direction;
  }

  private increaseSpeed() {
    this.speed = this._originalSpeed + 3;
    this.playSound(this._speedSound);
  }

  private playSound(move: any) {
    move.play();
  }

  set stepSound(stepSound: any) {
    this._stepSound = stepSound;
  }

  set speedSound(speedSound: any) {
    this._speedSound = speedSound;
  }

  set enemyColisionSound(sound: any) {
    this._enemyColisionSound = sound;
  }

  get actions(): any {
    return this._actions;
  }

  set originalSpeed(originalSpeed: number) {
    this._originalSpeed = originalSpeed;
  }

  set enemies(enemies: any[]) {
    this._enemies = enemies;
  }
}
export default Player;
