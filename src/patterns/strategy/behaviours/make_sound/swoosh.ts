import MakeSoundBehaviour from './sound_behaviour';

class Swoosh implements MakeSoundBehaviour {
  makeSound() {
    console.log(`swoosh!`);
  }
}

export default Swoosh;
