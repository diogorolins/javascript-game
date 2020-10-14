import DynamicEntity from "./DynamicEntity";

class Player extends DynamicEntity {
  private _actions: any = {};
  private _originalSpeed: number;
  private _speedSound: any;
  private _stepSound: any;

  public render(context: CanvasRenderingContext2D, frames: number): void {
    let actualSpritePosition: any = this.spritePosition[this.actualDirection][
      this.actualFrame
    ];

    if (this.checkIfMove()) {
      if (frames % 8 === 0) {
        this.moveFrame();
        this.plaStepSound();
        this.resetFrameLoop()
        }
    }
    this.draw(context, actualSpritePosition);
  }

  private resetFrameLoop() {
     if (this.actualFrame === 4) {
          this.actualFrame = 0;
        }
  }
  private moveFrame(){
     this.actualFrame += 1
  }

  private plaStepSound(){
    this._stepSound.play();
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
    if (this._actions.ArrowUp) this.moveUp();
    if (this._actions.ArrowDown) this.moveDown();
    if (this._actions.ArrowLeft) this.moveLeft();
    if (this._actions.ArrowRight) this.moveRight();

    if (this._actions.a) this.increaseSpeed();
    else this.speed = this._originalSpeed;
  }

  private moveUp() {
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

  private moveDown() {
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
  private moveLeft() {
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
  
  private moveRight() {
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
 
  private increaseSpeed() {
    this.speed = this._originalSpeed + 3;
    this._speedSound.play();
  }

  set stepSound(stepSound: any) {
    this._stepSound = stepSound;
  }

  set speedSound(speedSound: any) {
    this._speedSound = speedSound;
  }

  get actions(): any {
    return this._actions;
  }

  set originalSpeed(originalSpeed: number) {
    this._originalSpeed = originalSpeed;
  }
}
export default Player;
