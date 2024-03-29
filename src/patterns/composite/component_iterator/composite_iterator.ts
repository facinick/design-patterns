import IterableArray from "../IterableArray"
import Component from "../composite_classes/component"

import { IteratorObject } from "./iterator_interfaces"

class CompositeIterator implements IteratorObject<Component> {
  private stack: IterableArray<IteratorObject<Component>> = new IterableArray([])

  constructor(iterator: IteratorObject<Component>) {
    this.stack.push(iterator)
  }

  hasNext(): boolean {
    if (this.stack.length === 0) {
      return false
    } else {
      const iterator: IteratorObject<Component> = this.stack.peek()
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
      const iterator: IteratorObject<Component> = this.stack.peek()
      const component: Component | null = iterator.next()

      if (component) {
        this.stack.push(component.createIterator())
        return component
      } else {
        return null
      }

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