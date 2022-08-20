// These will be implemented by Collection Iterator classes, whose sole purpose of existence
// is to encap iteration. They'll take in Aggregate and provide ways to iterate
interface IteratorObject<T> {
  hasNext: () => boolean
  next: () => T
}

// Aggregate or collection, this is imlemented by the classes that needs to be iterated
interface Aggregate<T> {
  createIterator: () => IteratorObject<T>
}

export {
  Aggregate,
  IteratorObject
}