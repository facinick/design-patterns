import Beverage from "./template/beverage"
import Tea from "./template_implementations/tea"

function run() {
  const beverage: Beverage = new Tea()
  beverage.prepareRecipe()
}

run()