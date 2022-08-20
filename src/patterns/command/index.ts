import LightOffCommand from './commands/light_off_command';
import LightOnCommand from './commands/light_on_command';
import MultiDoorShutCommand from './commands/multi_door_shut_command';
import { GarageDoor, HallDoor, RoomDoor } from './receivers/door';
import { PhilipsLight } from './receivers/light';
import HistoryRemote from './remotes/history_remote';
import SimpleRemote from './remotes/simple_remote';

function run() {
  const remoteOne = new SimpleRemote();
  remoteOne.setCommand(new LightOnCommand(new PhilipsLight()));
  remoteOne.onButtonPress();

  remoteOne.setCommand(
    new MultiDoorShutCommand([new GarageDoor(), new HallDoor(), new RoomDoor()])
  );
  remoteOne.onButtonPress();

  const remoteTwo = new HistoryRemote();
  remoteTwo.setActionOneCommand(new LightOnCommand(new PhilipsLight()), 0);
  remoteTwo.setActionTwoCommand(new LightOffCommand(new PhilipsLight()), 0);

  // lights on
  remoteTwo.onActionOneButtonPress(0);
  // lights off
  remoteTwo.onActionTwoButtonPress(0);
  // undo lights off -> lights on
  remoteTwo.undo();
  // undo lights on -> lights off
  remoteTwo.undo();
}

run();
