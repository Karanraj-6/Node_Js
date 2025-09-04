// Node Package Manager (npm) in Node.js
// -------------------------------------
// npm is the default package manager for Node.js. It helps you manage dependencies, scripts, and project metadata.
// -------------------------------------
// 1. Initialize a new Node.js project (creates package.json):
// Run this command in your terminal:

//npm init

// -------------------------------------

// You will be prompted for project details. To skip prompts and use defaults:

// npm init -y

// -------------------------------------

// 2. Install a package locally (adds to dependencies in package.json):

// npm install <package-name>
// Example:
// npm install express

// -------------------------------------

// 3. Install a package globally (available system-wide):
// npm install -g <package-name>
// Example:

// npm install -g nodemon

// -------------------------------------

// 4. Install a package as a development dependency:

// npm install <package-name> --save-dev
// Example:
// npm install mocha --save-dev

// -------------------------------------


// 5. Uninstall a package:
// npm uninstall <package-name>
// Example:
// npm uninstall express

// -------------------------------------


// 6. Update all packages:
// npm update

// -------------------------------------


// 7. List installed packages:
// npm list

// -------------------------------------


// 8. Run a script defined in package.json:
// In package.json:
// "scripts": {
//   "start": "node app.js"
// }
// Run in terminal:
// npm start

// -------------------------------------


// 9. View package details:
// npm view <package-name>
// Example:
// npm view express

// -------------------------------------


// 10. Check npm and Node.js versions:
// npm -v
// node -v

// Note:
// - package.json is the heart of any Node.js project. It stores metadata, dependencies, and scripts.
// - npm registry hosts thousands of open-source packages for Node.js.
// - Use npm to share, install, and manage code efficiently.