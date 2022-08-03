import FlyBehaviour from './fly_behaviour';

class NoFLy implements FlyBehaviour {
  fly() {
    console.error(`I can't fly`);
  }
}

export default NoFLy;
