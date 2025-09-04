// ES Module System in Node.js
// --------------------------
// Node.js supports ES Modules (ECMAScript Modules) using the `export` and `import` syntax.
// To use ES Modules, your file should have a `.mjs` extension or set "type": "module" in package.json.

// Exporting functions using ES module syntax
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// You can also export multiple functions or values at once:
// function mul(a, b) { return a * b; }
// export { add, sub, mul };

// Usage in another ES module file:
// import { add, sub } from './ES_export.js';
// console.log(add(2, 3)); // 5
// console.log(sub(5, 2)); // 3

// Notes:
// - Use `export` before function/variable declarations to export them.
// - For default export: export default function add(a, b) { ... }
// - ES Modules are loaded asynchronously.
// - Make sure your Node.js version supports ES Modules (v12+ recommended).