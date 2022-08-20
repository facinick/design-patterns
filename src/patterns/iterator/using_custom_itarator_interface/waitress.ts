import MenuItem from '../menu_item/menu_item';

import {
  Aggregate,
  IteratorObject,
} from './iterator_interfaces/iterator_interfaces';

/* Waitress doesn't know anything about the individual menu implementations, all she knows is
 * the menu iterators have a common interface that she can use to iterate the menus
 */

class Waitress {
  private menus: Array<Aggregate<MenuItem>> = [];

  constructor(menus: Array<Aggregate<MenuItem>>) {
    this.menus = menus;
  }

  printMenu() {
    this.menus.forEach((menu) => {
      const menuIterator: IteratorObject<MenuItem> = menu.createIterator();
      this._printMenu(menuIterator);
    });
  }

  private _printMenu(menuIterator: IteratorObject<MenuItem>) {
    while (menuIterator.hasNext()) {
      const menuItem = menuIterator.next();
      console.log(`menu item: ${menuItem.name} for $${menuItem.price}`);
    }
  }
}

export default Waitress;
