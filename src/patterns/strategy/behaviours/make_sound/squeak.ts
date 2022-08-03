import MakeSoundBehaviour from './sound_behaviour';

class Squeak implements MakeSoundBehaviour {
  makeSound() {
    console.log(`queak queak`);
  }
}

export default Squeak;
