import Beverage, { SIZE } from '../Beverage';

class Decaf extends Beverage {
  constructor() {
    super();
    this.description = 'Decaf';
  }

  calculateCost(): number {
    switch (this.getSize()) {
      case SIZE.small: {
        return 0.99;
      }
      case SIZE.medium: {
        return 1.99;
      }
      case SIZE.tall: {
        return 2.99;
      }
    }
  }
}

export default Decaf;
