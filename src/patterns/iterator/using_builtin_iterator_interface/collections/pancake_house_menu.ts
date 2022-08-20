import MenuItem, { MenuItemProps } from '../../menu_item/menu_item';
import PancakeHouseMenuIterator from '../collection_iterators/pancake_house_iterator';

class PancakeHouseMenu implements Iterable<MenuItem> {
  private _menuItems: Array<MenuItem> = [];

  constructor() {
    this.addItem({
      name: 'Waffles',
      description: 'Yummy Waffles best of the kind!',
      price: 23.22,
      vegetarian: true,
    });
  }

  private addItem({ name, description, price, vegetarian }: MenuItemProps) {
    const menuItem: MenuItem = new MenuItem({
      name,
      description,
      price,
      vegetarian,
    });

    this._menuItems.push(menuItem);
  }

  [Symbol.iterator](): Iterator<MenuItem> {
    return new PancakeHouseMenuIterator(this._menuItems);
  }
}

export default PancakeHouseMenu;
