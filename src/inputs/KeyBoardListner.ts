import Player from "../entities/Player";
import IListner from "./IListner";

class KeyBoardListner implements IListner {
  listen(player: Player): void {
    document.addEventListener("keydown", (event) => {
      player.actions[event.key] = true;
    });

    document.addEventListener("keyup", (event) => {
      player.actions[event.key] = false;
    });
  }
}

export default KeyBoardListner;
