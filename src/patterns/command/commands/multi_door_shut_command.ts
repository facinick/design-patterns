import Command from "../command";
import Door from "../receivers/door";

class MultiDoorShutCommand implements Command {

  private doors: Array<Door>
  private canUndo = false

  constructor(doors: Array<Door>) {
    this.doors = doors
  }

  execute(): void {
    this.doors.forEach((door) => door.close())
    this.canUndo = true
  }

  undo(): void {
    if (this.canUndo) {
      this.doors.forEach((door) => door.open())
      this.canUndo = false
    }
  }
}

export default MultiDoorShutCommand