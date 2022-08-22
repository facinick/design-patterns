import Component from "./composite_classes/component"

class Waitress {
  private menu: Component

  constructor(menu: Component) {
    this.menu = menu
  }

  printMenu() {
    console.log(`===========================`)
    console.log(`Veg and Nonveg Menu`)
    console.log(`===========================`)

    const menuIterator = this.menu.createIterator()
    while (menuIterator.hasNext()) {
      const menuComponent: Component | null = menuIterator.next()
      if (menuComponent) {
        menuComponent.print()
      }
    }
  }

  printVegMenu() {
    console.log(`===========================`)
    console.log(`Vegetarian Menu`)
    console.log(`===========================`)

    const menuIterator = this.menu.createIterator()
    while (menuIterator.hasNext()) {
      const menuComponent: Component | null = menuIterator.next()
      try {
        if (menuComponent && menuComponent.getIsVegetarian()) {
          menuComponent.print()
        }
        // eslint-disable-next-line no-empty
      } catch (error) {

      }
    }
  }

  printNonVegMenu() {
    console.log(`===========================`)
    console.log(`Non-vegetarian Menu`)
    console.log(`===========================`)

    const menuIterator = this.menu.createIterator()
    while (menuIterator.hasNext()) {
      const menuComponent: Component | null = menuIterator.next()
      try {
        if (menuComponent && !menuComponent.getIsVegetarian()) {
          menuComponent.print()
        }
        // eslint-disable-next-line no-empty
      } catch (error) {

      }
    }
  }

}

export default Waitress