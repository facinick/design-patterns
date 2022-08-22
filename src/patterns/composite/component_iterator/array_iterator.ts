
import { IteratorObject } from "./iterator_interfaces"

class ArrayIterator<T> implements IteratorObject<T> {
  private array: Array<T> = []
  private position = 0

  constructor(array: Array<T>) {
    this.array = array
  }

  hasNext(): boolean {
    if (this.position >= 0 && this.position < this.array.length) {
      return true
    }

    return false
  }

  next(): T {
    const indexToReturn = this.position
    this.position = this.position + 1
    return this.array[indexToReturn]
  }
}

export default ArrayIterator