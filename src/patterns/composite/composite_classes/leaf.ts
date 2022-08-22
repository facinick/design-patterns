import NullIterator from "../component_iterator/null_iterator";

import Component from "./component";

interface MenuItemProps {
  name: string
  description: string
  price: number
  isVegetarian: boolean
}

/* This is MenuItem */
class Leaf extends Component {
  private name: string
  private description: string
  private price: number
  private isVegetarian: boolean

  constructor({ name, description, price, isVegetarian }: MenuItemProps) {
    super()
    this.name = name
    this.description = description
    this.price = price
    this.isVegetarian = isVegetarian
  }

  getName(): string {
    return this.name
  }

  getDescription(): string {
    return this.description
  }

  getPrice(): number {
    return this.price
  }

  getIsVegetarian(): boolean {
    return this.isVegetarian
  }

  createIterator() {
    return new NullIterator()
  }

  print() {
    console.log(`  ${this.getName()} @ $${this.getPrice()} ${this.getIsVegetarian() ? `🌱` : `🍗`}`)
    console.log(`    -- ${this.getDescription()}`)
  }

}

export default Leaf