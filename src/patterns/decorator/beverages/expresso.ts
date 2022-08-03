import Beverage, { SIZE } from '../Beverage';

class Expresso extends Beverage {
  constructor() {
    super();
    this.description = 'Expresso';
  }

  calculateCost(): number {
    switch (this.getSize()) {
      case SIZE.small: {
        return 0.52;
      }
      case SIZE.medium: {
        return 1.52;
      }
      case SIZE.tall: {
        return 2.52;
      }
    }
  }
}

export default Expresso;
