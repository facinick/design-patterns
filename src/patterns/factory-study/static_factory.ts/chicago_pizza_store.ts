import ChicagoClamPizza from "../pizza/new_york/clam";
import ChicagoPepperoniPizza from "../pizza/new_york/pepperoni";
import AllPizzaStore, { PizzaType } from "./pizza_store";

class ChicagoPizzaStore extends AllPizzaStore {
  createPizza(pizzaType: PizzaType) {
    let pizza;
    if (pizzaType === PizzaType.clam) {
      pizza = new ChicagoClamPizza()
    } else if (pizzaType === PizzaType.pepperoni) {
      pizza = new ChicagoPepperoniPizza()
    }

    return pizza
  }
}

export default ChicagoPizzaStore