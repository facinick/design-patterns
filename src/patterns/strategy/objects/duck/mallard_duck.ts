import FlyWithWings from '../../behaviours/fly/fly_with_wings';
import Quack from '../../behaviours/make_sound/quack';

import Duck from './duck';

class MallardDuck extends Duck {
  constructor() {
    super({
      flyBehaviour: new FlyWithWings(),
      makeSoundBehaviour: new Quack(),
    });
    console.log('created mallard duck');
  }

  display() {
    console.log('i am a mallard duck');
  }
}

export default MallardDuck;
