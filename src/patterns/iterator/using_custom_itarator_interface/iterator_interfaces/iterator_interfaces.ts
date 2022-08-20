// These will be implemented by Collection Iterator classes, whose sole purpose of existence

import MenuItem from "../../menu_item/menu_item";

// is to encap iteration. They'll take in Aggregate and provide ways to iterate
interface IteratorObject<T> {
  hasNext: () => boolean;
  next: () => T;
}

// Aggregate or collection, this is imlemented by the classes that needs to be iterated
interface Aggregate<T> {
  createIterator: () => IteratorObject<T>;
}

type Menu = Aggregate<MenuItem>
type MenuIterator = IteratorObject<MenuItem>

export { Aggregate, IteratorObject, Menu, MenuIterator };
