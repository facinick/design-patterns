import PizzaStore from './pizza_store';
import SimplePizzaFactory, { PIZZA_TYPE } from './simple_pizza_factory';

function run() {
  const simplePizzaFactory = new SimplePizzaFactory();
  const pizzaStore = new PizzaStore(simplePizzaFactory);
  pizzaStore.orderPizza(PIZZA_TYPE.PEPPERONI);
}

export default run;
