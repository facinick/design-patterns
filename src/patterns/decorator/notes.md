# Decorator Pattern

> Once you know the techniques of decorating, you’ll be able to give your (or someone else’s) objects new responsibilities without making any code changes to the underlying classes.

## Design Principle #4

> Open to extension, closed to modification

## Decorator Pattern Explanation:

We **want** to be able to do something like: `Mocha(Whip(Decaf))`


Beverage `->` CondimentDecorator `->` Mocha (`has-a` Beverage)

Beverage `->` CondimentDecorator `->` Whip (`has-a` Beverage)

Beverage `->` Decaf


We are using `inheritance` for type matching only: So we can pass objects in place of each other and implementing the decorator pattern. 

Mocha is not a Beverage, it's a condiment. But after wrapping a Beverage with Mocha, Mocha'ed Beverage is-a Beverage and this needs to be treated like a Beverage for other condiments.. hence the type matching. 

ex: Mocha(Decaf())

We are using `componsition` for adding new behaviour. (new price and description here)

every time we do `new Mocha(new Decaf())`, we are adding Mocha's cost and description to Decaf, without any inheritance but composition (Mocha has-a decaf...) (Mocha's price is Mocha's price + the decaf it `has`'s price and not any `super()`'s price)