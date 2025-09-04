// CommonJS Module Import in Node.js
// ---------------------------------
// Node.js uses the CommonJS module system by default. To import modules, use the `require()` function.
// This loads the exported object from the specified module file.

// Importing the exported functions from Commonjs_export.js
const calc = require('./Commonjs_export');

// Now you can use the imported functions as properties of the object
console.log('Addition:', calc.add(3, 3)); // Output: Addition: 6
console.log('Subtraction:', calc.sub(3, 3)); // Output: Subtraction: 0

// You can also destructure the imported object for direct access to functions:
// const { add, sub } = require('./Commonjs_export');           this might feels like ES module
// console.log(add(5, 2)); // Output: 7
// console.log(sub(5, 2)); // Output: 3

// Note:
// - The path './Commonjs_export' refers to the module file in the same directory.
// - The file extension (.js) is optional when requiring local modules.
// - CommonJS modules are loaded synchronously.