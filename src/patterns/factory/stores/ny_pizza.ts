import NewyorkClamPizza from '../pizza/new_york/clam';
import NewyorkPepperoniPizza from '../pizza/new_york/pepperoni';
import Pizza from '../pizza/pizza';

import PizzaStore, { PIZZA_TYPE } from './pizza_store';

class NewyorkPizzaStore extends PizzaStore {
  createPizza(pizzaType: PIZZA_TYPE): Pizza {
    let pizza: Pizza;

    switch (pizzaType) {
      case PIZZA_TYPE.CLAM: {
        pizza = new NewyorkClamPizza();
        break;
      }
      case PIZZA_TYPE.PEPPERONI: {
        pizza = new NewyorkPepperoniPizza();
        break;
      }
    }

    return pizza;
  }
}

export default NewyorkPizzaStore;
