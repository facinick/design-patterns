import NoFLy from '../../behaviours/fly/no_fly';
import Squeak from '../../behaviours/make_sound/squeak';

import Duck from './duck';

class RubberDuck extends Duck {
  constructor() {
    super({
      flyBehaviour: new NoFLy(),
      makeSoundBehaviour: new Squeak(),
    });
    console.log('created rubber duck');
  }

  display() {
    console.log('i am a rubber duck');
  }
}

export default RubberDuck;
