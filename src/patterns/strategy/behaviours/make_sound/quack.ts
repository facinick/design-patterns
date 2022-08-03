import MakeSoundBehaviour from './sound_behaviour';

class Quack implements MakeSoundBehaviour {
  makeSound() {
    console.log(`quack quack`);
  }
}

export default Quack;
