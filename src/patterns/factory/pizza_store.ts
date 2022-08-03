import Pizza from './pizza/pizza';
import SimplePizzaFactory, { PIZZA_TYPE } from './simple_pizza_factory';

class PizzaStore {
  private pizzaFactory: SimplePizzaFactory;

  constructor(pizzaFactory: SimplePizzaFactory) {
    this.pizzaFactory = pizzaFactory;
  }

  orderPizza(pizzaType: PIZZA_TYPE): Pizza {
    const pizza = this.pizzaFactory.createPizza(pizzaType);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export default PizzaStore;
