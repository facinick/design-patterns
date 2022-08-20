import NewyorkClamPizza from '../pizza/new_york/clam';
import NewyorkPepperoniPizza from '../pizza/new_york/pepperoni';

import PizzaFactory from './pizza_factory';
import { PizzaType } from './pizza_store';

class NewyorkPizzaFactory implements PizzaFactory {
  createPizza(pizzaType: PizzaType) {
    let pizza;
    if (pizzaType === PizzaType.clam) {
      pizza = new NewyorkClamPizza();
    } else if (pizzaType === PizzaType.pepperoni) {
      pizza = new NewyorkPepperoniPizza();
    }

    return pizza;
  }
}

export default NewyorkPizzaFactory;
