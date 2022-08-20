
// import DinerHouseMenu from "./using_custom_itarator_interface/collections/diner_house_menu"
// import PancakeHouseMenu from "./using_custom_itarator_interface/collections/pancake_house_menu"
// import Waitress from "./using_custom_itarator_interface/waitress"

import DinerHouseMenu from "./using_builtin_iterator_interface/collections/diner_house_menu"
import PancakeHouseMenu from "./using_builtin_iterator_interface/collections/pancake_house_menu"
import Waitress from "./using_builtin_iterator_interface/waitress"

function run() {

  // const waitress: Waitress = new Waitress([
  //   new DinerHouseMenu(),
  //   new PancakeHouseMenu(),
  // ])

  // waitress.printMenu()

  const waitress: Waitress = new Waitress([new DinerHouseMenu(), new PancakeHouseMenu(),])
  waitress.printMenu()

}

export default run