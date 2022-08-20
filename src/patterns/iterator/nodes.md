# Iterator Pattern

Our goal is to decouple the Waitress from the concrete implementations of the menus completely.

Different Menus or Collections or Aggregates, agree on one thing: MenuItems. They all use different mechanisms to store and access MenuItems internally, this MenuItem is of importance to the client Waitress. Waitress doesn't have to know about how the items are stored and any other details, waitress just wants to get MenuItems from the Menus.

What varies here is the way to iterate the MenuItems among these collections/aggregates/menus. So we need to encapsulate this.

`Collection`/`Aggregate`/`Menu` (Must have `createIterator()` => `Collection_Iterator`)

`Collection_Iterator` per collection (must have `next()`, `hasNext()`, `remove()`, etc)

`Client` will use these `Collection_Iterators` to iterate over objects. Tomorrow any new Menu comes, doesn't matter how it implements it's stuff, a new iterator for it will be created and thus it'll work with existing `Client` code.

Only `Collection_Iterator` needs to know about the `Collection`'s implementation..
