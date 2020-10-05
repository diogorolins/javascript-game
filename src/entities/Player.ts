import DynamicEntity from "./DynamicEntity";

class Player extends DynamicEntity {
  private actions: any = {
    ArrowUp: () => this.moveUp(),
    ArrowDown: () => this.moveDown(),
    ArrowLeft: () => this.moveLeft(),
    ArrowRight: () => this.moveRight(),
  };

  public render(context: CanvasRenderingContext2D, frames: number): void {
    let actualSpritePosition: any = this.spritePosition[this.actualDirection][
      this.actualFrame
    ];

    if (frames % 8 === 0) {
      this.actualFrame += 1;
      if (this.actualFrame === 4) {
        this.actualFrame = 0;
      }
    }
    this.draw(context, actualSpritePosition);
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

  public update(context: CanvasRenderingContext2D): void {}

  public action(key: string) {
    if (this.actions[key]) {
      this.actions[key]();
    }
  }

  public moveUp() {
    this.y_axis = this.y_axis - this.speed;
  }
  public moveDown() {
    this.y_axis = this.y_axis + this.speed;
  }
  public moveLeft() {
    this.x_axis = this.x_axis - this.speed;
    this.actualDirection = "ArrowLeft";
  }
  public moveRight() {
    this.x_axis = this.x_axis + this.speed;
    this.actualDirection = "ArrowRight";
  }
}

export default Player;
