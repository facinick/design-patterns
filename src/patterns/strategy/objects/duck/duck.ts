import FlyBehaviour from '../../behaviours/fly/fly_behaviour';
import MakeSoundBehaviour from '../../behaviours/make_sound/sound_behaviour';

class Duck {
  private flyBehaviour: FlyBehaviour;
  private makeSoundBehaviour: MakeSoundBehaviour;

  constructor({
    flyBehaviour,
    makeSoundBehaviour,
  }: {
    flyBehaviour: FlyBehaviour;
    makeSoundBehaviour: MakeSoundBehaviour;
  }) {
    this.flyBehaviour = flyBehaviour;
    this.makeSoundBehaviour = makeSoundBehaviour;
    console.log('created duck');
  }

  makeSound() {
    this.makeSoundBehaviour.makeSound();
  }

  display() {
    console.log('i am a duck');
  }

  fly() {
    this.flyBehaviour.fly();
  }

  setFlyBehaviour(flyBehaviour: FlyBehaviour) {
    this.flyBehaviour = flyBehaviour;
  }

  setSoundBehaviour(makeSoundBehaviour: MakeSoundBehaviour) {
    this.makeSoundBehaviour = makeSoundBehaviour;
  }
}

export default Duck;
