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