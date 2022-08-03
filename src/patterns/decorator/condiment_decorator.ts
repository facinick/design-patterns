import Beverage from './beverage';

// CondimentDecorator is-a Beverage
abstract class CondimentDecorator extends Beverage {
  // these are abstracts so that the condiments HAVE
  // to reimplement these and add their own
  // behaviour before or after the super.behaviou() methods

  // CondimentDecorator has-a Beverage
  abstract beverage: Beverage;
  abstract getDescription(): string;
  abstract calculateCost(): number;
}

export default CondimentDecorator;
