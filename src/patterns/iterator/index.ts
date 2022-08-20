
import DinerHouseMenu from "./using_custom_itarator_interface/collections/diner_house_menu"
import PancakeHouseMenu from "./using_custom_itarator_interface/collections/pancake_house_menu"
import Waitress from "./waitress"

function run() {

  const waitress: Waitress = new Waitress([
    new DinerHouseMenu(),
    new PancakeHouseMenu(),
  ])

  waitress.printMenu()

}

export default run