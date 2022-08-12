import Command from "../command";
import Light from "../receivers/light";

class LightOnCommand implements Command {

  private light: Light
  private canUndo = false

  constructor(light: Light) {
    this.light = light
  }

  undo(): void {
    if (this.canUndo) {
      this.light.off()
    }
  }

  execute(): void {
    this.light.on()
    this.canUndo = true
  }
}

export default LightOnCommand