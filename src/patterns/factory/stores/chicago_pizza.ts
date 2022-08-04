import ChicagoClamPizza from '../pizza/chicago/clam';
import ChicagoPepperoniPizza from '../pizza/chicago/pepperoni';
import Pizza from '../pizza/pizza';

import PizzaStore, { PIZZA_TYPE } from './pizza_store';

class ChicagoPizzaStore extends PizzaStore {
  createPizza(pizzaType: PIZZA_TYPE): Pizza {
    let pizza: Pizza;

    switch (pizzaType) {
      case PIZZA_TYPE.CLAM: {
        pizza = new ChicagoClamPizza();
        break;
      }
      case PIZZA_TYPE.PEPPERONI: {
        pizza = new ChicagoPepperoniPizza();
        break;
      }
    }

    return pizza;
  }
}

export default ChicagoPizzaStore;
