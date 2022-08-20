import MenuItem, { MenuItemProps } from '../../menu_item/menu_item';
import PancakeHouseMenuIterator from '../collection_iterators/pancake_house_iterator';
import {
  Aggregate,
  IteratorObject,
} from '../iterator_interfaces/iterator_interfaces';

class PancakeHouseMenu implements Aggregate<MenuItem> {
  private _menuItems: Array<MenuItem> = [];

  constructor() {
    this.addItem({
      name: 'Waffles',
      description: 'Yummy Waffles best of the kind!',
      price: 23.22,
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

    this._menuItems.push(menuItem);
  }

  createIterator(): IteratorObject<MenuItem> {
    return new PancakeHouseMenuIterator(this._menuItems);
  }
}

export default PancakeHouseMenu;
