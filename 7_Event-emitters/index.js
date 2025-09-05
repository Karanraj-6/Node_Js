// Event Emitters in Node.js
// ------------------------
// The 'events' module allows you to work with events and event-driven programming in Node.js.
// EventEmitter is a core class that lets you create, fire, and listen for your own events.

const EventEmitter = require('events');

// 1. Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// 2. Register an event listener using .on(eventName, listener)
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// 3. Emit (trigger) the event using .emit(eventName, ...args)
myEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!

// 4. Register a one-time listener using .once(eventName, listener)
myEmitter.once('shout', (msg) => {
    console.log(`Shouting: ${msg}`);
});
myEmitter.emit('shout', 'This will be shown'); // Will trigger
myEmitter.emit('shout', 'This will NOT be shown'); // Will NOT trigger

// 5. Remove an event listener using .off(eventName, listener)
function onBye(name) {
    console.log(`Goodbye, ${name}!`);
}
myEmitter.on('bye', onBye);
myEmitter.emit('bye', 'Bob'); // Output: Goodbye, Bob!
myEmitter.off('bye', onBye);
myEmitter.emit('bye', 'Bob'); // No output

// 6. Get the list of registered events
console.log('Registered events:', myEmitter.eventNames());

// 7. Inherit from EventEmitter to create custom event-driven classes
class MyClass extends EventEmitter {
    doSomething() {
        this.emit('done', 'Task completed!');
    }
}
const obj = new MyClass();
obj.on('done', (msg) => {
    console.log(msg);
});
obj.doSomething(); // Output: Task completed!

// 8. Useful EventEmitter methods and properties:
// - .on(event, listener): Register listener
// - .once(event, listener): Register one-time listener
// - .emit(event, ...args): Emit event
// - .off(event, listener): Remove listener
// - .removeAllListeners(event): Remove all listeners for event
// - .eventNames(): Get array of event names
// - .listenerCount(event): Get number of listeners for event

// Notes:
// - EventEmitter is the foundation for many core Node.js modules (like streams, HTTP, etc.).
// - Listeners are called synchronously in the order they were registered.
// - Avoid memory leaks: remove listeners when no longer needed.
// - You can pass any number of arguments to listeners via .emit().
