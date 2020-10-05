import Map from "../maps/Map1";
import { mapHeight, mapWidth, sprite } from "../properties/mapProperties";

class mapFactory {
  public static build(): Map {
    const backgroundImage = new Image();
    backgroundImage.src = sprite;
    const map: Map = new Map();
    map.height = mapHeight;
    map.width = mapWidth;
    map.sprite = backgroundImage;
    map.canvasHeight = mapHeight;
    map.canvasWidth = mapWidth;
    return map;
  }
}

export default mapFactory;
