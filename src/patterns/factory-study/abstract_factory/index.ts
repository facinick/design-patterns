import NewyorkPizzaStore from './newyork_pizza_store';
import AllPizzaStore, { PizzaType } from './pizza_store';

function run() {
  const store: AllPizzaStore = new NewyorkPizzaStore();
  store.orderPizza(PizzaType.clam);
}

run();
