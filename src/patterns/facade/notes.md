# Facade Pattern

Alters an interface, but for a different reason (than an adapter pattern) : to simplify the interface. It’s aptly named the Facade Pattern because this pattern hides all the complexity of one or more classes behind a clean, well-lit facade.

Facades don’t “encapsulate” the subsystem classes; they merely provide a simplified interface to their functionality. The subsystem classes still remain available for direct use by clients that need to use more specific interfaces.

A facade is free to add its own “smarts” in addition to making use of the subsystem.

To use the Facade Pattern, we create a class that simplifies and unifies a set of more complex classes that belong to some subsystem. Unlike a lot of patterns, Facade is fairly straightforward; there are no mind bending abstractions to get your head around.

## Facade vs Adapter:

The difference between the two is not in terms of how many classes they “wrap,” it is in their intent. The intent of the Adapter Pattern is to alter an interface so that it matches one a client is expecting. The intent of the Facade Pattern is to provide a simplified interface to a subsystem.

## Difference between a Decorator, an Adapter and a Facade

Decorator: Doesn’t alter the interface, but adds responsibility

Adapter: Converts one interface to another, Intent: Make an interface work with the target API

Facade: Converts one interface to another, Intent: Make an interface simpler

## Design Principle #5 (The Law of Demeter)

> Principle of Least Knowledge: talk only to your immediate friends

When you are designing a system, for any object, be careful of the number of classes it interacts with and also how it comes to interact with those classes.

Take any object, now from any method in that object, the principle tells us that **we should ONLY** invoke methods that belong to:

1. The object itself
2. Objects passed in as a parameter to the method
3. Any object the method creates or instantiates

> Notice that these guidelines tell us not to call methods on objects that were returned from calling other methods!

4. Any components of the object

> Think of a “component” as any object that is referenced by an instance variable. In other words, think of this as a HAS-A relationship.

Wrong:

```typescript
public float getTemp() {
    return station.getThermometer().getTemperature();
}
```

Correct:

```typescript
public float getTemp() {
    return station.getTemperature();
}
```

Correct:

```typescript
class Car {
  // [#4] a component of this class, we can call it's methods.
  engine: Engine;

  start(key: Key): void {
    //[#3] creating new object, it's methods are legal
    const doors: Doors = new Doors();
    // [#2] can call methods of object in the parameter
    const isAuthorized: boolean = key.turns();

    if (isAuthorized) {
      // [#4]
      this.engine.start();
      // [#1] can call methods of the object itself
      this.updateToDashboardDisplay();
      // [#3]
      doors.lock();
    }
  }

  updateToDashboardDisplay(): void {}
}
```
