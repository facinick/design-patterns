import AllPizzaStore, { PizzaStore, PizzaType } from './pizza_store';

function run() {
  const store: AllPizzaStore = new AllPizzaStore();
  store.orderPizza(PizzaType.clam, PizzaStore.newyork);
}

run();
