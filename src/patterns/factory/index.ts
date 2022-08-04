import ChicagoPizzaStore from './stores/chicago_pizza';
import PizzaStore, { PIZZA_TYPE } from './stores/pizza_store';

function run() {
  const pizzaStore: PizzaStore = new ChicagoPizzaStore();
  pizzaStore.orderPizza(PIZZA_TYPE.CLAM);
}

export default run;
