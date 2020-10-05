import Player from "../entities/Player";

interface IListner {
  listen(player: Player): void;
}

export default IListner;
