// Express.js Introduction
// ----------------------
// Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
// It simplifies the process of creating server-side applications and APIs.

// Key Features of Express.js:
// - Middleware support for handling requests, responses, and errors
// - Routing for defining URL paths and HTTP methods
// - Template engine integration for dynamic HTML rendering
// - Easy integration with databases and other Node.js modules
// - Large ecosystem and community support

// Notes:
// - Install Express in your project with: npm install express
// - Express is widely used for RESTful APIs, single-page apps, and full-stack web development
// - Middleware functions can be used for logging, authentication, error handling, etc.

//-------------------------------------------------------------
// steps of express:
// 1. Import the express module
// const express = require('express');

// 2. Create an Express application
// const app = express();

// // 3. Define a simple route
// app.get('/', (req, res) => {
//     res.send('Hello from Express!');
// });

// // 4. Start the server and listen on a port
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Express server running at http://localhost:${PORT}`);
// });


//----------------------------------------------------------------

// Basic Routing methods
// Routing refers to determining how an application responds to a client request
// to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

// app.METHOD(PATH, HANDLER)

// Where:

// app: is an instance of express.
// METHOD: is an HTTP request method, in lowercase.
// PATH: is a path on the server.
// HANDLER: is the function executed when the route is matched.

app.get('/',(req, res)=>{
    res.send(`got a get request`);
});

app.put('/', (req, res)=>{
    res.send(`got i put request`);
});

app.post('/', (req, res)=>{
    res.send(`got a post request`);
});

app.delete('/',(req, res)=>{
    res.send(`got a delete request`);
});

// other imp methods 

// GET
// 🔹 Server se data lene ke liye.
// Example: GET /users → sab users laa do.
// Body nahi hoti.
// Sirf URL & query params.

// POST
// 🔹 Naya resource create karne ke liye.
// Example: POST /users → naya user banado.
// Body me data hota hai (JSON/form).

// PUT
// 🔹 Purane resource ko replace karne ke liye.
// Example: PUT /users/101 → pura user data overwrite.

// PATCH
// 🔹 Resource ka partial update karne ke liye.
// Example: PATCH /users/101 → sirf email update karo.

// DELETE
// 🔹 Resource delete karne ke liye.
// Example: DELETE /users/101 → user hata do.

// OPTIONS
// 🔹 Server se poochhna:
// "Bhai, is resource pe kaunse methods allowed hain?"
// CORS preflight requests ke liye use hota hai.

// HEAD
// 🔹 Same as GET, but bina body ke. Sirf headers return karta hai.
// Mostly performance checks ke liye.

// Browser-supported HTTP methods (real-world me)
// GET ✅
// POST ✅
// PUT ✅
// PATCH ✅
// DELETE ✅
// HEAD ✅
// OPTIONS ✅

// Baaki methods jaise TRACE, CONNECT, LINK, UNLINK, COPY, SEARCH, etc. browsers block karte hain (security ke liye).

