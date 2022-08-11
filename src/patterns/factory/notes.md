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


Pizza Types A,B,C

client code: Order Pizza(A)

```
OrderPizza(p) {
  if(p==A) createPizza A
  if(p==B) createPizza B
  if(p==C) createPizza C

  p.bake()
  p.cut()
}


```


Changes that'll occur:
- what if similar checking logic has to be done in another part of the codebase?
- What if tomorrow there is another Pizza Type D?
- What id tomorrow there is a new store, with variants of pizza types A,B,C,D?

we want to be able to do this:

```
OrderPizza(p) {
  p = createPizza(p)
  
  p.bake()
  p.cut()
}

```

This createPizza method creates the pizza given the type..
if we can

1. SUPPLY FROM OUTSIDE 

Supply this function from outside through client, we can supply any function from outside based on what pizza must be created.

example is simple factory. But that way, the code that handles pizza creation, will be entire separate from the code that handles other functions `bake -> cut`. WHAT IF we want to ensure, everyone, no matter what their pizza is, uses the same ordering process, `create -> bake -> cut`, asin we want to share the rest of thr process compulsorily?

2. FORCE A CLASS TO IMPLEMENT IT 

since we want to force classes to follow same procedure we already decided on, `create -> bake -> cut`, we will have to use inheritance to keep common code somewhere. HAH! so we will keep common code in parent class, so subclasses will surely follow the common code because of the parent. and since we are using inheritance and these two classes, these child classes must be the ones we will use to create custom pizza creation method? why not.. that's what we want right. and we can force these child classes to implement a pizza creation method by marking parent as abstract and defining a createPizza abstract method... the orderPizza function.. let's see some of it in action


```
abstract Parent {

  orderPizza(type): pizza {
    pizza = createPizza(type)
    pizza.bake()
    pizza.cut()
  }

  abstract createPizza(type): pizza

}

Child {
  createPizza(type) {
    if(type === A) return PizzaA
    if(type === B) return PizzaB
  }
}

```

 We create classes and force them to have a pizza creation method, the classes exist to create pizza..

 for every new type of pizza, you make change only in CHild's create pizza method

 for every new Store of pizza, you just create a new subclass.
 therefore:


``` 

objective: you need to decide among n classes inside a method without prior knowledge.. you need to create a parent class and factory subclasses for all these n classes


Superclass:
abstract
common code (used by all the "runtime decided objects")
abstract factory method


Subclasses:
implement abstract factory method
 
 ```

 