import DynamicEntity from "./DynamicEntity";

class Player extends DynamicEntity {
  private _actions: any = {};
  private _originalSpeed: number;
  private _speedSound: any;
  private _stepSound: any;

  get stepSound(): any {
    return this._stepSound;
  }
  set stepSound(stepSound: any) {
    this._stepSound = stepSound;
  }
  get speedSound(): any {
    return this._speedSound;
  }
  set speedSound(speedSound: any) {
    this._speedSound = speedSound;
  }

  get actions(): any {
    return this._actions;
  }
  set actions(actions: any) {
    this._actions = actions;
  }

  get originalSpeed(): number {
    return this._originalSpeed;
  }
  set originalSpeed(originalSpeed: number) {
    this._originalSpeed = originalSpeed;
  }

  public render(context: CanvasRenderingContext2D, frames: number): void {
    let actualSpritePosition: any = this.spritePosition[this.actualDirection][
      this.actualFrame
    ];
    if (this.checkIfMove()) {
      if (frames % 8 === 0) {
        this.actualFrame += 1;
        this._stepSound.play();
        if (this.actualFrame === 4) {
          this.actualFrame = 0;
        }
      }
    }

    this.draw(context, actualSpritePosition);
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
    this.checkActions();
  }

  private checkActions() {
    if (this._actions.ArrowUp) this.ArrowUp();
    if (this._actions.ArrowDown) this.ArrowDown();
    if (this._actions.ArrowLeft) this.ArrowLeft();
    if (this._actions.ArrowRight) this.ArrowRight();

    if (this._actions.a) this.a();
    else this.speed = this._originalSpeed;
  }

  public ArrowUp() {
    let colision: any = [];

    this.staticEntities.forEach((s) => {
      colision.push(
        s.checkColision(
          this.x_axis,
          this.y_axis - this.speed,
          this.width,
          this.height
        )
      );
    });
    if (!colision.includes(true)) this.y_axis = this.y_axis - this.speed;
  }

  public ArrowDown() {
    let colision: any = [];

    this.staticEntities.forEach((s) => {
      colision.push(
        s.checkColision(
          this.x_axis,
          this.y_axis + this.speed,
          this.width,
          this.height
        )
      );
    });

    if (!colision.includes(true)) this.y_axis = this.y_axis + this.speed;
  }
  public ArrowLeft() {
    let colision: any = [];

    this.staticEntities.forEach((s) => {
      colision.push(
        s.checkColision(
          this.x_axis - this.speed,
          this.y_axis,
          this.width,
          this.height
        )
      );
    });

    if (!colision.includes(true)) this.x_axis = this.x_axis - this.speed;
    this.actualDirection = "ArrowLeft";
  }
  public ArrowRight() {
    let colision: any = [];

    this.staticEntities.forEach((s) => {
      colision.push(
        s.checkColision(
          this.x_axis + this.speed,
          this.y_axis,
          this.width,
          this.height
        )
      );
    });
    if (!colision.includes(true)) this.x_axis = this.x_axis + this.speed;
    this.actualDirection = "ArrowRight";
  }
  public a() {
    this.speed = this._originalSpeed + 3;
    this._speedSound.play();
  }
}

export default Player;
