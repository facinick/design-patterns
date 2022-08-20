export interface MenuItemProps {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;
}

class MenuItem {
  private _name: string;
  private _description: string;
  private _vegetarian: boolean;
  private _price: number;

  constructor({ name, description, vegetarian, price }: MenuItemProps) {
    this._name = name;
    this._description = description;
    this._vegetarian = vegetarian;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get vegetarian() {
    return this._vegetarian;
  }

  get price() {
    return this._price;
  }
}

export default MenuItem;
