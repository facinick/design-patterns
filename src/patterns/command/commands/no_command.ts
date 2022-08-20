/* eslint-disable @typescript-eslint/no-empty-function */
import Command from '../command';

class NoCommand implements Command {
  execute(): void {}

  undo(): void {}
}

export default NoCommand;
