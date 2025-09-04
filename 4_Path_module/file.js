// Path Module in Node.js
// ---------------------
// The 'path' module provides utilities for working with file and directory paths.
// It is a core module, so no installation is required.

const path = require('path');

// 1. Get directory name, file name, and file extension from a file path
console.log('Directory name:', path.dirname(__filename));      // Returns the directory of the current file
console.log('Base name:', path.basename(__filename));         // Returns the file name with extension
console.log('Extension name:', path.extname(__filename));     // Returns the file extension

// 2. Join multiple path segments into a single path
let joinedPath = path.join('/grandparent', 'parent', 'child');
console.log('Joined path:', joinedPath);                      // Output: /grandparent/parent/child

// 3. Resolve a sequence of paths into an absolute path
let resolvedPath = path.resolve('/grandparent', 'parent', 'child');
console.log('Resolved path:', resolvedPath);                  // Output: C:\grandparent\parent\child (on Windows)

// 4. Normalize a path (removes redundant segments like '..' and '.')
let normalizedPath = path.normalize('/grandparent/parent/../grandchild');
console.log('Normalized path:', normalizedPath);              // Output: /grandparent/grandchild

// Additional Useful Methods:
// - path.isAbsolute(p): Checks if a path is absolute
// - path.parse(p): Returns an object with root, dir, base, ext, name
// - path.format(obj): Returns a path string from an object

// Example:
let parsed = path.parse(__filename);
console.log(parsed);

// Notes:
// - __filename is the absolute path of the current file
// - __dirname is the absolute path of the current directory
// - Path methods work cross-platform (Windows, macOS, Linux)