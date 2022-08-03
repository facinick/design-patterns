# Observer Pattern

## Doubt from the book

What does this mean?

> Observable protects crucial methodsIf you look at the Observable API, the setChanged() method is protected. So what? Well, this means you can’t call setChanged() unless you’ve subclassed Observable. This means you can’t even create an instance of the Observable class and **compose it** (meaning?) with your own objects, you have to subclass. The design violates a second design principle here...favor composition over inheritance.

## How does our solution incorporate the design principles learned so far:

### Aspects of the program that vary

1. number of listeners to single data source updates
2. type of listeners to single data source updates
3. state of single data source

we should be able to change [1 and 2] and [3] independently without affecting each other. 

### interface > implement

since we are using subscribe and publisher interfaces, publisher keeps track of subscriber implementations. everything is loosely coupled.

### composition (has-a) > inheritance (is-a)

subscribed are composed with their subjects. This can even happen runtime... any number of subscribers can be given to the publisher.

publisher has-a subscribers.