import Command from "../command";
import Light from "../receivers/light";

class LightOffCommand implements Command {

  private light: Light
  private canUndo = false

  constructor(light: Light) {
    this.light = light
  }

  undo(): void {
    if (this.canUndo) {
      this.light.on()
    }
  }

  execute(): void {
    this.light.off()
    this.canUndo = true
  }
}

export default LightOffCommand