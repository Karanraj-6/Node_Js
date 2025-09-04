# Introduction to Node.js

## What is Node.js?
Node.js is an **open-source**, **cross-platform** JavaScript runtime environment that allows you to run JavaScript code outside the browser. Built on Google Chrome’s V8 engine, Node.js is designed for building fast, scalable network applications.

### Key Features
- **Asynchronous & Event-Driven:** Node.js uses non-blocking I/O, allowing it to handle multiple tasks at once without waiting for one to finish before starting another.
- **Single-Threaded but Scalable:** Uses a single thread with an event loop to efficiently manage many connections.
- **Fast Execution:** Chrome’s V8 engine compiles JavaScript to native machine code for high performance.
- **Cross-Platform:** Runs on Windows, macOS, Linux, and more.
- **Rich Ecosystem:** npm (Node Package Manager) provides thousands of libraries and modules for almost any task.

## Why Use Node.js?
Node.js is ideal for:
- **Real-time applications:** Chat apps, online gaming, collaboration tools
- **APIs and backend services:** RESTful APIs, microservices
- **Handling large amounts of data:** Efficiently processes data streams
- **Full-stack JavaScript:** Use JavaScript for both frontend and backend development

### Common Use Cases
- Web servers and RESTful APIs
- Real-time applications (chat apps, live feeds)
- Streaming applications (video/audio streaming)
- Command-line tools
- Microservices architecture

---

## Basic Example: Simple Web Server
A minimal web server using Node.js:
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```
> 💡 **Tip:** Frameworks like Express.js make web server creation even easier.

---

# Node.js Cheat Sheet

## 1️⃣ Node.js Basics
- **Check Node.js version:**
  ```sh
  node -v
  ```
- **Check npm version:**
  ```sh
  npm -v
  ```
- **Run a JS file:**
  ```sh
  node filename.js
  ```

## 2️⃣ Creating a Node.js Project
- **Initialize project (creates package.json):**
  ```sh
  npm init
  ```
- **Quick init with defaults:**
  ```sh
  npm init -y
  ```

## 3️⃣ Installing Packages
- **Install a package locally:**
  ```sh
  npm install package-name
  ```
- **Install a package globally:**
  ```sh
  npm install -g package-name
  ```
- **Install dev dependencies:**
  ```sh
  npm install package-name --save-dev
  ```
- **Uninstall a package:**
  ```sh
  npm uninstall package-name
  ```

## 4️⃣ Running Node.js Scripts
- **Directly run file:**
  ```sh
  node app.js
  ```
- **Run script from package.json:**
  Add to `package.json`:
  ```json
  "scripts": {
    "start": "node app.js"
  }
  ```
  Then run:
  ```sh
  npm start
  ```

## 5️⃣ Common Node.js Modules
- `http` → create servers
- `fs` → read/write files
- `path` → file paths
- `os` → OS info
- `events` → event handling

**Example: Read a file**
```js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

## 6️⃣ Node.js Server Example
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
});

server.listen(3000, () => console.log('Server running at http://localhost:3000/'));
```

## 7️⃣ Express.js Basics
- **Install Express:**
  ```sh
  npm install express
  ```
- **Simple Express server:**
  ```js
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello from Express!');
  });

  app.listen(3000, () => console.log('Server running on port 3000'));
  ```

## 8️⃣ Useful npm Commands
- **Update all packages:**
  ```sh
  npm update
  ```
- **List installed packages:**
  ```sh
  npm list
  ```
- **Install specific version:**
  ```sh
  npm install package-name@version
  ```

## 9️⃣ Helpful Tips
- Use **nodemon** for auto-restarting server on code changes:
  ```sh
  npm install -g nodemon
  nodemon app.js
  ```
- Use `require` for Node.js modules and `import` for ES modules.
- Node.js uses asynchronous callbacks heavily—learn **Promises** & **async/await** for modern code.