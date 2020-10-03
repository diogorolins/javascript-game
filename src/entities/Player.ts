import DynamicEntity from "./DynamicEntity";

class Player extends DynamicEntity {
  public render(context: CanvasRenderingContext2D): void {
    context.drawImage(
      this.sprite,
      this.sprite_x,
      this.sprite_y,
      this.width,
      this.height,
      this.x_axis,
      this.y_axis,
      this.width * 3,
      this.height * 3
    );
  }

  public update(): void {
    throw new Error("Method not implemented.");
  }
}

export default Player;
