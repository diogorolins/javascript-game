import Entity from "./Entity";

abstract class StaticEntity extends Entity {
  private _color: string;
  private _positions: any[];
  private _colisionSound: any;

  public render(context: CanvasRenderingContext2D, frames: number): void {
    this.positions.forEach((e: any) => {
      context.drawImage(
        this.sprite,
        this.x_axis,
        this.y_axis,
        this.spriteWidth,
        this.spriteHeight,
        e.x,
        e.y,
        e.w,
        e.h
      );
    });
  }

  public checkColision(x: number, y: number, width: number, height: number) {
    let colision: boolean = false;
    this._positions.forEach((e) => {
      if (
        y < e.y + e.h &&
        y + height > e.y &&
        x < e.x + e.w &&
        x + width > e.x
      ) {
        colision = true;
      }
    });

    return colision;
  }

  get color(): string {
    return this._color;
  }

  set color(color: string) {
    this._color = color;
  }

  get colisionSound(): any {
    return this._colisionSound;
  }

  set colisionSound(colisionSound: any) {
    this._colisionSound = colisionSound;
  }

  get positions(): any {
    return this._positions;
  }

  set positions(positions: any) {
    this._positions = positions;
  }
}

export default StaticEntity;
