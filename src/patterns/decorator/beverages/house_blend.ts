import Beverage, { SIZE } from '../Beverage';

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'HouseBlend';
  }

  calculateCost(): number {
    switch (this.getSize()) {
      case SIZE.small: {
        return 0.22;
      }
      case SIZE.medium: {
        return 1.22;
      }
      case SIZE.tall: {
        return 2.22;
      }
    }
  }
}

export default HouseBlend;
