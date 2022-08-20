# Design Toolbox

## OO Basics

- ### Objects
- ### Classes
- ### Inheritance
  Methods and functions inheriting the attributes of another class. The main aim is code reuse which ensures that programs are developed faster. DRY (don’t Repeat yourself) is a concept in inheritance which imply that in a program, you should not have different codes that are similar. Instead, have one class and use other methods to call them and extend the functionalities where necessary
- ### Polymorphism
  Allows code to have different meanings or functions
  - Compile time
    - Function overloading
    - Operator overloading
  - Run time
- ### Abstraction
  A programming methodology concerned with displaying only the relevant aspect to the user
  - Abstract class
  - Interface
- ### Encaptulation
  process of keeping classes private so they cannot be modified by external codes.

---

## OO Principles

- ### Encapsulate what varies
- ### Composition > Inheritance
- ### Program to interface, not inheritance
- ### Strive for loosely coupled designs between objects that interact
- ### Classes should be open for extension, but closed for modification
- ### Depend on abstractions. Do not depend on concrete classes.
- ### Only talk to your friends
- ### Don't call us, we will call you

---

## OO Patterns

### Strategy:

defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

### Observer:

defines a one-to-many dependency between objects so that when one object change state, all it's dependents are notified and updated automatically.

### Decorator:

attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

### Factory:

#### Static Factory

defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

#### Abstract Factory

TODO

### Singleton:

ensures a class has only one
instance, and provides a global point of access to it.

### Command:

encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests and support undo-able operations.

### Adapter:

converts the interface of a class into another interface the clients expect. Adapter lets
classes work together that couldn’t otherwise because of incompatible interfaces.

### Facade:

provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher level interface that makes the subsystem easier to use.

### Template:

defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm’s structure.

### Iterator:

provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
