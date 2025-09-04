// ES Module Import in Node.js
// --------------------------
// Node.js supports ES Modules (ECMAScript Modules) using the `import` and `export` syntax.
// To use ES Modules, your file should have a `.mjs` extension or set "type": "module" in package.json.

// Importing named exports from another ES module file
import { add, sub } from './ES_export.js'; // Use .js extension for ES modules

console.log('Addition:', add(4, 5));     // Output: Addition: 9
console.log('Subtraction:', sub(4, 3));  // Output: Subtraction: 1

// You can also import all exports as an object:
// import * as calc from './ES_export.js';
// console.log(calc.add(2, 3));
// console.log(calc.sub(5, 2));

// Notes:
// - The path './ES_export.js' refers to the module file in the same directory.
// - The file extension (.js) is required for ES modules in Node.js.
// - ES Modules are loaded asynchronously.
// - Make sure your Node.js version supports ES Modules (v12+ recommended).
// - If you use default export: import add from './ES_export.js';

