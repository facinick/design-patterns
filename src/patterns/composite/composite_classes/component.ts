/* eslint-disable @typescript-eslint/no-unused-vars */
import { Aggregate, IteratorObject } from "../component_iterator/iterator_interfaces"
import UnsupportedOperationError from "../error/unsupported_operation"

abstract class Component implements Aggregate<Component | null> {

  /* Composite methods */
  add(_component: Component): void {
    throw new UnsupportedOperationError(UnsupportedOperationError.DEFAULT_ERROR_MESSAGE)
  }

  remove(_component: Component): void {
    throw new UnsupportedOperationError(UnsupportedOperationError.DEFAULT_ERROR_MESSAGE)
  }

  getChild(_i: number): Component {
    throw new UnsupportedOperationError(UnsupportedOperationError.DEFAULT_ERROR_MESSAGE)
  }

  /* Common methods */
  abstract createIterator(): IteratorObject<Component>

  getName(): string {
    throw new UnsupportedOperationError(UnsupportedOperationError.DEFAULT_ERROR_MESSAGE)
  }

  getDescription(): string {
    throw new UnsupportedOperationError(UnsupportedOperationError.DEFAULT_ERROR_MESSAGE)
  }

  abstract print(): void

  /* Leaf methods */

  getPrice(): number {
    throw new UnsupportedOperationError(UnsupportedOperationError.DEFAULT_ERROR_MESSAGE)
  }

  getIsVegetarian(): boolean {
    throw new UnsupportedOperationError(UnsupportedOperationError.DEFAULT_ERROR_MESSAGE)
  }

}

export default Component