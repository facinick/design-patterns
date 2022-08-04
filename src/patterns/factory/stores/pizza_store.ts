import Pizza from '../pizza/pizza';

export enum PIZZA_TYPE {
  'PEPPERONI' = 'pepperoni',
  'CLAM' = 'clam',
}

/*
 * create a framework that ties the store and the pizza
 * creation together, yet still allows things to remain
 * flexible.
 */

/*
 * localize all the pizza-making activities (create, prep, bake.. box)
 * to the PizzaStore class, and yet give the franchises
 * freedom to have their own regional style (create pizza by type).
 */

abstract class PizzaStore {
  // all subclasses follow same method for ordering pizza,
  // we want this to remain consistent across sub-classes

  // what **varies** among sub-classes is style of pizza they make
  // ny-pizza has thin crust, chicago has thick and so on.
  // this part that varies is abstracted away by moving it to
  // seperate method and focring all subclasses to implement
  // their own createPizza methods while still using
  // orderPizza method common to all
  orderPizza(pizzaType: PIZZA_TYPE): Pizza {
    const pizza = this.createPizza(pizzaType);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  // all subclasses implement their own pizzaFactories
  // for creating pizzas
  // this factory method handles object creatin and
  // encapsulates it in subclass thereby decoupling
  // client code in this class from object creation code
  // in subclass

  // this can be defined instead of abstract,
  // that way we will have a default way to create pizza
  abstract createPizza(pizzaType: PIZZA_TYPE): Pizza;
}

export default PizzaStore;
