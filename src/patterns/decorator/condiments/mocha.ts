import Beverage, { SIZE } from '../beverage';
import CondimentDecorator from '../condiment_decorator';

class Mocha extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
    this.description = 'Mocha';
  }

  getDescription(): string {
    return `${this.beverage.description} ${this.description}`;
  }

  calculateCost(): number {
    switch (this.getSize()) {
      case SIZE.small: {
        return this.beverage.calculateCost() + 0.1;
      }
      case SIZE.medium: {
        return this.beverage.calculateCost() + 0.2;
      }
      case SIZE.tall: {
        return this.beverage.calculateCost() + 0.3;
      }
    }
  }
}

export default Mocha;
