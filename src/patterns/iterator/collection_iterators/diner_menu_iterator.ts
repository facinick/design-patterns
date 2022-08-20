import { IteratorObject } from "../iterator_interfaces/iterator_interfaces";
import MenuItem from "../menu_item/menu_item";

class DinerMenuIterator implements IteratorObject<MenuItem> {

  private _menuItems: Map<number, MenuItem> = new Map()
  private position = 0

  constructor(menuItems: Map<number, MenuItem>) {
    this._menuItems = menuItems
  }

  hasNext() {
    if (this.position >= 0 && this.position < this._menuItems.size && this._menuItems.has(this.position)) {
      return true
    }

    return false
  }

  next() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const menuItem: MenuItem = this._menuItems.get(this.position)!
    this.position = this.position + 1
    return menuItem
  }

}

export default DinerMenuIterator