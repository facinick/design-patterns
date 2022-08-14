import NewyorkClamPizza from "../pizza/new_york/clam";
import NewyorkPepperoniPizza from "../pizza/new_york/pepperoni";

import AllPizzaStore, { PizzaType } from "./pizza_store";

class NewyorkPizzaStore extends AllPizzaStore {
  createPizza(pizzaType: PizzaType) {
    let pizza;
    if (pizzaType === PizzaType.clam) {
      pizza = new NewyorkClamPizza()
    } else if (pizzaType === PizzaType.pepperoni) {
      pizza = new NewyorkPepperoniPizza()
    }

    return pizza
  }
}

export default NewyorkPizzaStore