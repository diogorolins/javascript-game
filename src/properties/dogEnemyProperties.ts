export const spriteHeight: number = 20;
export const spriteWidth: number = 20;
export const heigth: number = 60;
export const width: number = 60;
export const sprite: string = "./src/assets/images/sprite.png";
export const stepSound = "./src/assets/sounds/enemyStep.mp3";
export const spritePosition: any = {
  ArrowRight: {
    0: { x: 79, y: 0 },
    1: { x: 99, y: 0 },
    2: { x: 119, y: 0 },
    3: { x: 139, y: 0 },
  },
  ArrowLeft: {
    0: { x: 80, y: 20 },
    1: { x: 100, y: 20 },
    2: { x: 120, y: 20 },
    3: { x: 139.5, y: 20 },
  },
};
export const initialPositions: any[] = [
  { x: 1700, y: 80, signal: "-", direction: "ArrowRight", frame: 0 },
  { x: 500, y: 170, signal: "-", direction: "ArrowRight", frame: 0 },
  { x: 400, y: 310, signal: "+", direction: "ArrowLeft", frame: 0 },
  { x: 1400, y: 390, signal: "+", direction: "ArrowLeft", frame: 0 },
  { x: 100, y: 570, signal: "+", direction: "ArrowLeft", frame: 0 },
  { x: 1700, y: 680, signal: "+", direction: "ArrowLeft", frame: 0 },
  { x: 600, y: 840, signal: "+", direction: "ArrowLeft", frame: 0 },
  { x: 1000, y: 910, signal: "+", direction: "ArrowLeft", frame: 0 },
  { x: 1800, y: 990, signal: "+", direction: "ArrowLeft", frame: 0 },
];
export const speed: number = 4;
