import Component from "../composite_classes/component"

import { IteratorObject } from "./iterator_interfaces"

class NullIterator implements IteratorObject<Component> {
  hasNext() {
    return false
  }

  next(): null {
    return null
  }
}

export default NullIterator