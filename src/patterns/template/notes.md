# Template Method Pattern

The Template Method defines the steps of an algorithm and allows subclasses to provide the implementation for one or more steps.

Parent `abstract` class has the `final` template method, and various other methods that may or may not be implemented in the parent class.

Since the template method is common to all the subclasses and cannot be overridden by the subclasses, it defines the 'skeleton' of an algorithm.. while subclasses can only alter certain parts of it.

The parent class may provide `hooks` that child subclasses may or may not override in order to let subclasses have a say!

## Design Principle #6 (The HollyWood Principle)

> Don’t call us, we’ll call you.

The Hollywood Principle gives us a way to prevent “dependency rot.” 

Dependency rot happens when you have high-level components depending on low-level components depending on high-level components depending on sideways components depending on low-level components, and so on. When rot sets in, no one can easily understand the way a system is designed.

With the Hollywood Principle, we allow low-level components to hook themselves into a system, but the high-level components determine when they are needed, and how. In other words, the high-level components give the low-level components a “don’t call us, we’ll call you” treatment.