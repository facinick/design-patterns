import DinerHouseMenu from "./collections/diner_house_menu"
import PancakeHouseMenu from "./collections/pancake_house_menu"
import Waitress from "./waitress"

function run() {

  const waitress: Waitress = new Waitress([
    new DinerHouseMenu(),
    new PancakeHouseMenu(),
  ])

  waitress.printMenu()

}

export default run