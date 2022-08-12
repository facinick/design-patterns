# Singleton Pattern

> What will happen if two threads call `getInstance()` method at the same time?

In that case the second thread is going to create a new instance of Singleton class and override the existing instance which has been created by the first thread.

JavaScript is a single threaded programming language, so no issues here.

For multi threaded systems likes ones built with Java, problems will occur.

## Problems to look out for:

1. Multiple threads are using your singleton class.
2. Multiple class loaders are loading your singleton class.
3. In case you're using `static` keyword to implement a singleton class by marking all your members as `static` you might run into issues involving order of initialization.