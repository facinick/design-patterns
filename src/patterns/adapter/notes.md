# Adapter pattern

The adapter acts as the middleman by receiving requests from the client and converting
them into requests that make sense on the vendor classes.


The Adapter implements the target interface and holds an instance of the Adaptee.

`Client` code (written for `Square` === `Target`)

`Adapter` code (Wraps `Circle` aka `Adaptee` and exposes interface for `Square` aka `Target` )

`Square` code (`Target`)

`Circle` code (`Adaptee`)

Square == Adapter(Circle)

Adapter transforms client's request to Target, into special request to Adaptee. Client doesn't know anything about the Adaptee.

Notes:

- The job of implementing an `Adapter` really is proportional to the size of the interface you need to support as your `Target` interface
- The `Adapter` Pattern’s role is to convert one interface into another. You may well have situations where an `Adapter` holds two or more `Adaptees` that are
needed to implement the `Target` interface
