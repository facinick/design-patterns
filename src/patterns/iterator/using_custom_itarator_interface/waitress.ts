
import {
  Menu,
  MenuIterator,
} from './iterator_interfaces/iterator_interfaces';

/* Waitress doesn't know anything about the individual menu implementations, all she knows is
 * the menu iterators have a common interface that she can use to iterate the menus
 */

class Waitress {
  private menus: Array<Menu> = [];

  constructor(menus: Array<Menu>) {
    this.menus = menus;
  }

  printMenu() {
    this.menus.forEach((menu) => {
      const menuIterator: MenuIterator = menu.createIterator();
      this._printMenu(menuIterator);
    });
  }

  private _printMenu(menuIterator: MenuIterator) {
    while (menuIterator.hasNext()) {
      const menuItem = menuIterator.next();
      console.log(`menu item: ${menuItem.name} for $${menuItem.price}`);
    }
  }

  /* Just when we thought it was safe...Now they want to add a dessert submenu.Okay, 
    now what? Now we have to support not only multiple menus, 
    but menus within menus.It would be nice if we could just make 
    the dessert menu an element of the DinerMenu collection, 
    but that won’t work as it is now implemented. -> goto composite pattern
  */
}

export default Waitress;
