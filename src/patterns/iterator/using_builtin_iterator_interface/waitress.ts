import MenuItem from '../menu_item/menu_item';

/* Waitress doesn't know anything about the individual menu implementations, all she knows is
 * the menu iterators have a common interface that she can use to iterate the menus
 */

class Waitress {
  private menus: Array<Iterable<MenuItem>> = [];

  constructor(menus: Array<Iterable<MenuItem>>) {
    this.menus = menus;
  }

  printMenu() {
    this.menus.forEach((menu) => {
      for (const item of menu) {
        console.log(`item: ${item.name} @ $${item.price}`);
      }
    });
  }
}

export default Waitress;
