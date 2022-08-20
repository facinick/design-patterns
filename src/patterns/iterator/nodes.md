# Iterator Pattern

Our goal is to decouple the Waitress from the concrete implementations of the menus completely.

Different Menus or Collections or Aggregates, agree on one thing: MenuItems. They all use different mechanisms to store and access MenuItems internally, this MenuItem is of importance to the client Waitress. Waitress doesn't have to know about how the items are stored and any other details, waitress just wants to get MenuItems from the Menus.

What varies here is the way to iterate the MenuItems among these collections/aggregates/menus. So we need to encapsulate this.

`Collection`/`Aggregate`/`Menu` (Must have `createIterator()` => `Collection_Iterator`)

`Collection_Iterator` per collection (must have `next()`, `hasNext()`, `remove()`, etc)

`Client` will use these `Collection_Iterators` to iterate over objects. Tomorrow any new Menu comes, doesn't matter how it implements it's stuff, a new iterator for it will be created and thus it'll work with existing `Client` code.

Only `Collection_Iterator` needs to know about the `Collection`'s implementation..

> The Iterator Pattern allows traversal of the elements of an aggregate without exposing the underlying implementation.It also places the task of traversal on the iterator object, not on the aggregate, which simplifies the aggregate interface and implementation, and places the responsibility where it should be.

## Ordering

TL;RL: NO.

Iterators imply no ordering. The underlying collections may be unordered as in a hashtable or in a bag; they may even contain duplicates. So ordering is related to both the properties of the underlying collection and to the implementation. In general, you should make no assumptions about ordering unless the Collection documentation indicates otherwise.

## Design Principle #7

> A class should have only one reason to change.

Using the iterator, we have encap iteration for the Aggregate/Collection. Now the class doesn't need to worry at all about how to iterate, any changes to the way of iteration will not affect the class. The class should only be concerned about it's objects and their state.

## Cohesion

**Cohesion** is a term you’ll hear used as a measure of how closely a class or a module supports a single purpose or responsibility.We say that a module or class has high cohesion when it is designed around a set of related functions, and we say it has low cohesion when it is designed around a set of unrelated functions.Cohesion is a more general concept than the Single Responsibility Principle, but the two are closely related. Classes that adhere to the principle tend to have high cohesion and are more maintainable than classes that take on multiple responsibilities and have low cohesion.
