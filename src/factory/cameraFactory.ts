import Camera from "../camera/Camera";
import Player from "../entities/Player";
import Map from "../maps/Map";
import {
  gameHeight,
  gameWidth,
  initialCamera_x,
  initialCamera_y,
  borderCamera,
} from "../properties/gameProperties";

class cameraFactory {
  static build(player: Player, map: Map): Camera {
    const camera: Camera = new Camera();
    camera.x_axys = initialCamera_x;
    camera.y_axys = initialCamera_y;
    camera.width = gameWidth;
    camera.height = gameHeight;
    camera.border = borderCamera;
    camera.player = player;
    camera.map = map;
    return camera;
  }
}

export default cameraFactory;
