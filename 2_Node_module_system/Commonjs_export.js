// CommonJS Module System in Node.js
// ----------------------------------
// Node.js uses the CommonJS module system by default. This allows you to split your code into reusable modules.

// To export functions, objects, or values from a module, use `module.exports`.
// If you export multiple things, assign them as properties of the exported object.

// Example use case: Exporting multiple utility functions

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// Exporting the functions using CommonJS syntax
module.exports = { add, sub};