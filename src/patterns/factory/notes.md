# Factory Pattern

We have a bunch of classes and we don't know at runtime which one to use


Process
.
. Object creation based on condition
. Object Manipulation
.

Move object creation to subclass
keep object manipulation in main class (now abstract)
main class doesn't know which subclass concrete to produce
let subclass implement object creation method (encapsulated)


## Creator Classes
abstract PizzaStore (orderPizza, **abstract createPizza**)

  ^

NYPizzaStore (**createPizza** encapsulates ny style pizza making)

ChicagoPizzaStore (**createPizza** encapsulates ch style pizza making)

> **abstract createPizza** is the factory method that encapsulates
> the pizza creation process

## Product Classes
abstract Pizza (toppings, prepare, bake, cut, box)

  ^

NYCheesePizza

NYClamsPizza

NYPepperoniPizza

ChicagoCheesePizza

ChicagoClamsPizza

ChicagoPepperoniPizza


> As in the official definition, you’ll often hear developers say that the Factory Method lets subclasses decide which class to instantiate. They say “decide” not because the pattern allows subclasses themselves to decide at runtime, but because the creator class is written without knowledge of the actual products that will be created, which is decided purely by the choice of the subclass that is used.

