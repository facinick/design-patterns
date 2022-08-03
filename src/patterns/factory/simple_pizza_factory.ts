import ClamPizza from './pizza/clam';
import PepperoniPizza from './pizza/pepperoni';
import Pizza from './pizza/pizza';
import VeggiePizza from './pizza/veggie';

export enum PIZZA_TYPE {
  'PEPPERONI' = 'pepperoni',
  'CLAM' = 'clam',
  'VEGGIE' = 'veggie',
}

class SimplePizzaFactory {
  createPizza(pizzaType: PIZZA_TYPE) {
    let pizza: Pizza;

    switch (pizzaType) {
      case PIZZA_TYPE.CLAM: {
        pizza = new ClamPizza();
        break;
      }
      case PIZZA_TYPE.PEPPERONI: {
        pizza = new PepperoniPizza();
        break;
      }
      case PIZZA_TYPE.VEGGIE: {
        pizza = new VeggiePizza();
        break;
      }
    }

    return pizza;
  }
}

export default SimplePizzaFactory;
