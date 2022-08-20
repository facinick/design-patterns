import NewyorkPizzaFactory from './newyork_pizza_factory';
import PizzaFactory from './pizza_factory';
import AllPizzaStore, { PizzaType } from './pizza_store';

function run() {
  const factory: PizzaFactory = new NewyorkPizzaFactory();
  const store: AllPizzaStore = new AllPizzaStore(factory);
  store.orderPizza(PizzaType.clam);
}

run();
