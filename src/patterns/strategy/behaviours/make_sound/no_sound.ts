import MakeSoundBehaviour from './sound_behaviour';

class NoSound implements MakeSoundBehaviour {
  makeSound() {
    console.error(`i don't speak`);
  }
}

export default NoSound;
