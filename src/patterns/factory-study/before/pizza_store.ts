import ChicagoClamPizza from '../pizza/chicago/clam';
import ChicagoPepperoniPizza from '../pizza/chicago/pepperoni';
import NewyorkClamPizza from '../pizza/new_york/clam';
import NewyorkPepperoniPizza from '../pizza/new_york/pepperoni';

export enum PizzaType {
  clam = 'clam',
  pepperoni = 'pepperoni',
}

export enum PizzaStore {
  chicago = 'chicago',
  newyork = 'newyork',
}

class AllPizzaStore {
  orderPizza(pizzaType: PizzaType, pizzaStore: PizzaStore) {
    let pizza;

    // ********************************************************* //

    if (pizzaStore === PizzaStore.newyork) {
      if (pizzaType === PizzaType.clam) {
        pizza = new NewyorkClamPizza();
      } else if (pizzaType === PizzaType.pepperoni) {
        pizza = new NewyorkPepperoniPizza();
      }
    } else if (pizzaStore === PizzaStore.chicago) {
      if (pizzaType === PizzaType.clam) {
        pizza = new ChicagoClamPizza();
      } else if (pizzaType === PizzaType.pepperoni) {
        pizza = new ChicagoPepperoniPizza();
      }
    }

    // imagine adding one more store?

    // ********************************************************* //

    pizza?.prepare();
    pizza?.bake();
    pizza?.cut();
    pizza?.box();

    return pizza;
  }
}

export default AllPizzaStore;
