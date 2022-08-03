import FlyBehaviour from './fly_behaviour';

class FlyWithWings implements FlyBehaviour {
  fly() {
    console.log(`I am flying`);
  }
}

export default FlyWithWings;
