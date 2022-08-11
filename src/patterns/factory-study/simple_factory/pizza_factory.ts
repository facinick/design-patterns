import Pizza from "../pizza/pizza"
import { PizzaType } from "./pizza_store"

interface PizzaFactory {
  createPizza: (pizzaType: PizzaType) => Pizza | undefined
}

export default PizzaFactory