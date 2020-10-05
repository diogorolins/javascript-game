import DynamicEntity from "./DynamicEntity";

class Player extends DynamicEntity {
  private _actions: any = {};

  private _originalSpeed: number;

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
      this.width,
      this.height,
      this.x_axis,
      this.y_axis,
      this.width * 3,
      this.height * 3
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

    if (this._actions.Control) this.Control();
    else this.speed = this._originalSpeed;
  }

  public ArrowUp() {
    this.y_axis = this.y_axis - this.speed;
  }

  public ArrowDown() {
    this.y_axis = this.y_axis + this.speed;
  }
  public ArrowLeft() {
    this.x_axis = this.x_axis - this.speed;
    this.actualDirection = "ArrowLeft";
  }
  public ArrowRight() {
    this.x_axis = this.x_axis + this.speed;
    this.actualDirection = "ArrowRight";
  }
  public Control() {
    this.speed = this.speed + 0.3;
  }
}

export default Player;
