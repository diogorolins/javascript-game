import Map from "../maps/Map1";
import { mapHeight, mapWidth, sprite } from "../properties/mapProperties";
import { gameWidth, gameHeight } from "../properties/canvasProperties";

class mapFactory {
  public static build(): Map {
    const backgroundImage = new Image();
    backgroundImage.src = sprite;
    const map = new Map();
    map.height = mapHeight;
    map.width = mapWidth;
    map.sprite = backgroundImage;
    map.canvasHeight = gameHeight;
    map.canvasWidth = gameWidth;
    return map;
  }
}

export default mapFactory;
