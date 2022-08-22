
import Composite from "./composite_classes/composite"
import Leaf from "./composite_classes/leaf"
import Waitress from "./waitress"

function run() {
  const pancakeMenu: Composite = new Composite({
    name: "PANCAKE HOUSE MENU",
    description: "Breakfast for everyone!"
  })

  const dinerMenu: Composite = new Composite({
    name: "DINER HOUSE MENU",
    description: "Lunch, Dinner and Dessert from the carrebian!"
  })

  const cafeMenu: Composite = new Composite({
    name: "CAFE DISCO MENU",
    description: "Snacks for the snack time!"
  })

  const megaMenu: Composite = new Composite({
    name: "MEGA MENU",
    description: "Dinner Buffet for all!"
  })

  const dessertMenu: Composite = new Composite({
    name: "COLD STORY MENU",
    description: "Tasty sweet cravings!"
  })

  const allMenus: Composite = new Composite({
    name: "ALL MENUS",
    description: "Presenting all day food for everybody!"
  })

  allMenus.add(pancakeMenu)
  allMenus.add(dinerMenu)
  allMenus.add(cafeMenu)

  /* Pancake House Menu */

  pancakeMenu.add(new Leaf({
    name: "Soft Pancake",
    description: "it's softer than a veg baby's butt",
    price: 10.99,
    isVegetarian: true,
  }))

  pancakeMenu.add(new Leaf({
    name: "Soft Nonveg Pancake",
    description: "it's softer than a baby butt",
    price: 12.99,
    isVegetarian: false,
  }))

  /* Diner House Menu */

  dinerMenu.add(new Leaf({
    name: "Pasta",
    description: "it's tasta mama-mia",
    price: 5.99,
    isVegetarian: true,
  }))

  dinerMenu.add(new Leaf({
    name: "Calzone",
    description: "it's canadian what can I say",
    price: 1.99,
    isVegetarian: false,
  }))

  dinerMenu.add(new Leaf({
    name: "Spaghetti",
    description: "mhmm yummy spaghetti agli olio",
    price: 5.99,
    isVegetarian: false,
  }))

  dinerMenu.add(megaMenu)
  dinerMenu.add(dessertMenu)

  /* Cafe Menu */

  cafeMenu.add(new Leaf({
    name: "Coffee",
    description: "gonna knock your brains out baby",
    price: 2.99,
    isVegetarian: true,
  }))

  cafeMenu.add(new Leaf({
    name: "Blueberry Cheese cake",
    description: "those tasty blueberries from the wild are HERE!",
    price: 3.00,
    isVegetarian: true,
  }))

  /* Mega Menu */

  megaMenu.add(new Leaf({
    name: "Dinner Special",
    description: "All in one Buffet",
    price: 30.99,
    isVegetarian: false,
  }))

  /* Dessert Menu */

  dessertMenu.add(new Leaf({
    name: "Ice-cream",
    description: "brought to you by naturals",
    price: 2.99,
    isVegetarian: true,
  }))

  dessertMenu.add(new Leaf({
    name: "Ice-cream sandwitch",
    description: "naturals + unnaturals",
    price: 3.99,
    isVegetarian: true,
  }))

  const waitress: Waitress = new Waitress(allMenus)
  waitress.printMenu()
  waitress.printNonVegMenu()
}

export default run