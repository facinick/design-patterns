import ArrayIterator from "./component_iterator/array_iterator";
import { Aggregate } from "./component_iterator/iterator_interfaces";

class IterableArray<T> implements Aggregate<T> {
  private array: Array<T> = []

  constructor(array: Array<T>) {
    this.array = array
  }

  createIterator() {
    return new ArrayIterator(this.array)
  }

  push(...items: T[]) {
    this.array.push(...items)
  }

  pop() {
    return this.array.pop()
  }

  peek() {
    return this.array[this.array.length - 1]
  }

  remove(element: T) {
    this.array.splice(this.array.findIndex(a => JSON.stringify(a) === JSON.stringify(element)), 1)
  }

  get length() {
    return this.array.length
  }

  getAtIndex(index: number) {
    return this.array[index]
  }

}

export default IterableArray