# strategy pattern

The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

## trying out inheritance

used inheritance for sharing behaviour across many subclasses but now, one change in parent will introduce behavious in every subclass even if some don't need it.

temp solution was to override subclass to modify behaviour..but in that case every time you need to add a behaviour to majority or even half the subclasses by adding it to parent, you'll have to modify all the subclasses that don't need the behaviour.

### problems with inheritance

- with every new behaviour -> check all subclasses and override where not needed or different behaviour needed.
- with every new subclass added -> check and override behaviours not needed.

### other issues

- Code is duplicated across subclasses.

- Runtime behavior changes are difficult.

- Hard to gain knowledge of all duck behaviors.

- Changes can unintentionally affect other ducks.

## moving to interface

how about, we create interface of behaviours..that way every subclass can decide if they want a behaviour and implement in the way they want!

### problems this fixes

- new added subclasses can decide and choose what behaviours they want and only pick those.. instead of inheriting all and overriding them.

- new behaviour interfaces that we will add will only be implemented by subclasses that need them.. so it definitely won't affect other subclasses that don't need them.

### problems with interface

- but now, every time a new subclasses is added, even if someone classes share same behaviour.. new subclass has to reimplement them! lot's and lot's of duplicate code everywhere!

- if one behaviour needs to be changed, it'll have to be changed in every subclass that implements it.

## what next?

inheritance can't be used because not all subclasses will have same behvaiour. No point overriding behaviour again and again for every existing and future subclass that doesn't need them. **behaviour keeps changing across subclasses.**

interface can't be used because many subclasses will have same behaviour. No point reimplementing same behaviour again and again for every subclass that needs them. **behaviour needs to be reused.**

there can also be multiple versions of same behaviour. So multiple subclasses need to inherit the behaviour but implement their own versions.

hmm. jeeez.

## Design Principle #1

> Identify the aspects of your application that vary and separate them from what stays the same.
>
> *(or: take the parts that vary and encapsulate them, so that later you can alter or extend the parts that vary without affecting those that don’t.)*

Take what varies and “encapsulate” it so it won’t affect the rest of your code.

If you’ve got some aspect of your code that is changing (like the discussed behaviours), say with every new requirement, then you know you’ve got a behavior that needs to be pulled out and separated from all the stuff that doesn’t change.

So what varies? Fly() and Quack() behaviour varies across subclasses.. and also stays similar across some classes. so these behaviours **needs to be separated from the duck classes**

## What do we want?

- we might want to instantiate a new MallardDuck instance and initialize it with a specific type of flying behavior.
- make sure that we can change the behavior of a duck dynamically.

## Design Principle #2

> Program to an interface, not an implementation

> Program to an interface” really means “Program to a supertype

So this time it won’t be the Duck classes that will implement the flying and quacking interfaces. 

Instead, we’ll make a set of classes whose entire reason for living is to represent a behavior and it’s the behavior class, rather than the Duck class, that will implement the behavior interface.


## Design Principle #3 

> Favor composition over inheritance.