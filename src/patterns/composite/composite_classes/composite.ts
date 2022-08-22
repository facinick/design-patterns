import IterableArray from "../IterableArray";
import CompositeIterator from "../component_iterator/composite_iterator";
import { IteratorObject } from "../component_iterator/iterator_interfaces";

import Component from "./component";

interface CompositeProps {
  name: string
  description: string
}

/* This is Menu, can contain MenuItems or Menu */
class Composite extends Component {

  private components: IterableArray<Component> = new IterableArray<Component>([])
  private iterator: IteratorObject<Component> | undefined
  private name: string
  private description: string

  constructor({ name, description }: CompositeProps) {
    super()
    this.name = name
    this.description = description
  }

  add(_component: Component): void {
    this.components.push(_component)
  }

  remove(_component: Component): void {
    this.components.remove(_component)
  }

  getChild(_i: number): Component {
    return this.components.getAtIndex(_i)
  }

  getName(): string {
    return this.name
  }

  getDescription(): string {
    return this.description
  }

  createIterator() {
    if (!this.iterator) {
      this.iterator = new CompositeIterator(this.components.createIterator())
    }

    return this.iterator
  }

  print() {
    console.log()
    console.log(`${this.getName()}, ${this.getDescription()}`)
    console.log(`---------------------------`)

    while (this.iterator?.hasNext()) {
      const menuComponent: Component | null = this.iterator.next()
      if (menuComponent) {
        menuComponent.print()
      }
    }
  }

}

export default Composite