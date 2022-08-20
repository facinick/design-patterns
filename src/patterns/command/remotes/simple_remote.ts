import Command from '../command';

class SimpleRemote {
  private slot: Command | undefined;

  setCommand(command: Command) {
    this.slot = command;
  }

  onButtonPress() {
    this.slot?.execute();
  }
}

export default SimpleRemote;
