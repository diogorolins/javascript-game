import Map from "./Map";

class Map1 extends Map {
  constructor() {
    super();
  }

  public render(context: CanvasRenderingContext2D): void {
    context.drawImage(this.sprite, 0, 0, this.width, this.height);
  }
}
export default Map1;
