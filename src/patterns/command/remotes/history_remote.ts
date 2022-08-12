import Command from "../command";
import NoCommand from "../commands/no_command";

class HistoryRemote {
  private actionOneSlots: Array<Command> = new Array(10)
  private actionTwoSlots: Array<Command> = new Array(10)
  private executedCommands: Array<Command> = []

  constructor() {
    this.actionOneSlots.fill(new NoCommand())
    this.actionTwoSlots.fill(new NoCommand())
  }

  setActionOneCommand(command: Command, slotNumber0To9Inclusive: number) {
    if (slotNumber0To9Inclusive >= 0 && slotNumber0To9Inclusive <= 9) {
      this.actionOneSlots[slotNumber0To9Inclusive] = command
    }
  }

  setActionTwoCommand(command: Command, slotNumber0To9Inclusive: number) {
    if (slotNumber0To9Inclusive >= 0 && slotNumber0To9Inclusive <= 9) {
      this.actionTwoSlots[slotNumber0To9Inclusive] = command
    }
  }

  clearActionOneCommand(slotNumber0To9Inclusive: number) {
    if (slotNumber0To9Inclusive >= 0 && slotNumber0To9Inclusive <= 9) {
      this.actionOneSlots[slotNumber0To9Inclusive] = new NoCommand()
    }
  }

  clearActionTwoCommand(slotNumber0To9Inclusive: number) {
    if (slotNumber0To9Inclusive >= 0 && slotNumber0To9Inclusive <= 9) {
      this.actionTwoSlots[slotNumber0To9Inclusive] = new NoCommand()
    }
  }

  onActionOneButtonPress(slotNumber0To9Inclusive: number) {
    if (slotNumber0To9Inclusive >= 0 && slotNumber0To9Inclusive <= 9) {
      this.actionOneSlots[slotNumber0To9Inclusive].execute()
      this.executedCommands.push(this.actionOneSlots[slotNumber0To9Inclusive])
    }
  }

  onActionTwoButtonPress(slotNumber0To9Inclusive: number) {
    if (slotNumber0To9Inclusive >= 0 && slotNumber0To9Inclusive <= 9) {
      this.actionTwoSlots[slotNumber0To9Inclusive].execute()
      this.executedCommands.push(this.actionTwoSlots[slotNumber0To9Inclusive])
    }
  }

  undo() {
    const commandToUndo = this.executedCommands.pop()
    if (commandToUndo) {
      commandToUndo.undo()
    }
  }
}

export default HistoryRemote