import PizzaFactory from './pizza_factory';

export enum PizzaType {
  clam = 'clam',
  pepperoni = 'pepperoni',
}

export enum PizzaStore {
  chicago = 'chicago',
  newyork = 'newyork',
}

class AllPizzaStore {
  pizzaFactory: PizzaFactory;

  constructor(pizzaFactory: PizzaFactory) {
    this.pizzaFactory = pizzaFactory;
  }

  orderPizza(pizzaType: PizzaType) {
    // ********************************************************* //
    const pizza = this.pizzaFactory.createPizza(pizzaType);
    // ********************************************************* //

    pizza?.prepare();
    pizza?.bake();
    pizza?.cut();
    pizza?.box();

    return pizza;
  }
}

export default AllPizzaStore;
