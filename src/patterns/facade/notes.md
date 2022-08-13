# Facade Pattern

Alters an interface, but for a different reason (than an adapter pattern) : to simplify the interface. It’s aptly named the Facade Pattern because this pattern hides all the complexity of one or more classes behind a clean, well-lit facade.

Facades don’t “encapsulate” the subsystem classes; they merely provide a simplified interface to their functionality. The subsystem classes still remain available for direct use by clients that need to use more specific interfaces.

A facade is free to add its own “smarts” in addition to making use of the subsystem

Facade vs Adapter: The difference between the two is not in terms of how many classes they “wrap,” it is in their intent. The intent of the Adapter Pattern is to alter an interface so that it matches one a client is expecting. The intent of the Facade Pattern is to provide a simplified interface to a subsystem.

To use the Facade Pattern, we create a class that simplifies and unifies a set of more complex classes that belong to some subsystem. Unlike a lot of patterns, Facade is fairly straightforward; there are no mind bending abstractions to get your head around.

## Difference between Decorator, Adapter and a Facade

Decorator: Doesn’t alter the interface, but adds responsibility

Adapter: Converts one interface to another, Intent: Make an interface work with the target API

Facade: Converts one interface to another, Intent: Make an interface simpler

