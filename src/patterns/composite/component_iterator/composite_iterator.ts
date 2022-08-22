import Component from "../composite_classes/component"

import { IteratorObject } from "./iterator_interfaces"


class CompositeIterator implements IteratorObject<Component> {
  private stack: Array<IteratorObject<Component>> = []

  constructor(iterator: IteratorObject<Component>) {
    this.stack.push(iterator)
  }

  hasNext(): boolean {
    if (this.stack.length === 0) {
      return false
    } else {
      const iterator: IteratorObject<Component> = this.stack[this.stack.length - 1]
      if (!iterator.hasNext()) {
        this.stack.pop()
        return this.hasNext()
      } else {
        return true
      }
    }
  }

  next(): Component | null {
    if (this.hasNext()) {
      const iterator: IteratorObject<Component> = this.stack[this.stack.length - 1]
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: Component = iterator.next()!

      this.stack.push(component.createIterator())
      return component
    } else {
      return null
    }
  }
}

export default CompositeIterator

/*
stack:
[A] => [[B], [C], D, E]
[B] => [F,G]
[C] => [G,H]

flat:
[A] => [[B] => [F,G], [C] => [G,H], D, E]

next:
[A] -> [B] -> [F] -> G -> [C] -> G -> H -> D -> E
*/