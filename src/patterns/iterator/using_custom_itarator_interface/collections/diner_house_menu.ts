import MenuItem, { MenuItemProps } from '../../menu_item/menu_item';
import DinerMenuIterator from '../collection_iterators/diner_menu_iterator';
import {
  IteratorObject,
  Menu,
} from '../iterator_interfaces/iterator_interfaces';

class DinerHouseMenu implements Menu {
  private _menuItems: Map<number, MenuItem> = new Map<number, MenuItem>();
  private index = 0;

  constructor() {
    this.addItem({
      name: 'Pizza',
      description: 'Yummy Pizza best of the kind!',
      price: 63.22,
      vegetarian: false,
    });

    this.addItem({
      name: 'Pasta',
      description: 'Squigly pasta',
      price: 22.22,
      vegetarian: false,
    });

    this.addItem({
      name: 'Rotto',
      description: 'The best juicy rotto in town, ratatata!',
      price: 199.99,
      vegetarian: true,
    });
  }

  addItem({ name, description, price, vegetarian }: MenuItemProps) {

    const menuItem: MenuItem = new MenuItem({
      name,
      description,
      price,
      vegetarian,
    });

    this._menuItems.set(this.index, menuItem);

    this.index = this.index + 1;
  }

  createIterator(): IteratorObject<MenuItem> {
    return new DinerMenuIterator(this._menuItems);
  }
}

export default DinerHouseMenu;
