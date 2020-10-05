import Player from "../entities/Player";

class KeyListner {
  static listen(player: Player) {
    document.addEventListener("keydown", (event) => {
      player.action(event.key);
    });

    /* document.addEventListener("keyup", (event) => {
      console.log(event.key);
    }); */
  }
}

export default KeyListner;
