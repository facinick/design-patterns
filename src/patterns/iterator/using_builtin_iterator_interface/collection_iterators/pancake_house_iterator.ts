import MenuItem from "../../menu_item/menu_item";

class PancakeHouseMenuIterator implements Iterator<MenuItem> {

  private _menuItems: Array<MenuItem> = []
  private position = 0

  constructor(menuItems: Array<MenuItem>) {
    this._menuItems = menuItems
  }

  hasNext() {
    if (this.position >= 0 && this.position < this._menuItems.length) {
      return true
    }

    return false
  }

  next() {
    const menuItem: MenuItem = this._menuItems[this.position]
    this.position = this.position + 1
    return {
      done: !this.hasNext(),
      value: menuItem
    }
  }

}

export default PancakeHouseMenuIterator