import Pizza from "../pizza/pizza";

export enum PizzaType {
  clam = "clam",
  pepperoni = "pepperoni",
}

export enum PizzaStore {
  chicago = "chicago",
  newyork = "newyork",
}

abstract class AllPizzaStore {

  abstract createPizza(pizzaType: PizzaType): Pizza | undefined

  orderPizza(pizzaType: PizzaType) {

    let pizza;

    // ********************************************************* //
    pizza = this.createPizza(pizzaType)
    // ********************************************************* //

    pizza?.prepare()
    pizza?.bake()
    pizza?.cut()
    pizza?.box()

    return pizza

  }
}

export default AllPizzaStore