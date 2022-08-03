import FlyWithWings from '../../behaviours/fly/fly_with_wings';
import NoSound from '../../behaviours/make_sound/no_sound';

import Duck from './duck';

class RedheadDuck extends Duck {
  constructor() {
    super({
      flyBehaviour: new FlyWithWings(),
      makeSoundBehaviour: new NoSound(),
    });
    console.log('created redhead duck');
  }

  display() {
    console.log('i am a redhead duck');
  }
}

export default RedheadDuck;
