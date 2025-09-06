// Middleware: Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
// Middleware functions can perform the following tasks:
// i)execute any code.
// ii)Make changes to the request and the response objects.
// iii)End the request-response cycle.
// iv)Call the next middleware function in the stack.
// v)If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

//----------------------------------------------------------------------

// # Difference between  app = express() vs router = Router()



// 1. const app = express()
// This creates the main application object.
// It represents your entire Express server.
// You attach global middlewares and define routes directly on app.
// Example:

const express = require("express");
const app2 = express();

app2.use(express.json());

app2.get("/", (req, res) => {
  res.send("Home Page");
});

app2.listen(3000);

// 2. const router = express.Router()
// This creates a mini application (sub-router) inside Express.
// It’s like a modular, isolated route handler.
// You define routes inside the router and then plug it into app.
// Example:

const express = require("express");
const app3 = express();
const router = express.Router();

router.get("/profile", (req, res) => {
  res.send("User Profile");
});

app3.use("/users", router);  


//---------------------------------------------------------------------------------------

//An Express application can use the following types of middleware:
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware

//i)Application-level middleware:
// Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
// This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// Here is an example of loading a series of middleware functions at a mount point, with a mount path. It illustrates a
// middleware sub-stack that prints request info for any type of HTTP request to the /user/:id path.

app.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

//To skip the rest of the middleware functions from a router middleware stack, call next('route') to pass control to the next route.
//Note: next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.

app.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', (req, res, next) => {
  res.send('special')
})


// ii) Router level application:

const express = require("express");
const app4 = express();
const router4 = express.Router();

// middleware 1
const checkAuth = (req, res, next) => {
  console.log("Checking authentication...");
  // dummy auth
  if (req.query.auth === "true") {
    next();
  } else {
    res.status(401).send("Not Authorized!");
  }
};

// middleware 2
const logRequest = (req, res, next) => {
  console.log(`Request URL: ${req.originalUrl}`);
  next();
};

// middleware 3
const addHeader = (req, res, next) => {
  res.set("X-Powered-By", "Express-Magic");
  next();
};

// route with multiple middlewares
router4.get(
  "/",
  checkAuth,
  logRequest,
  addHeader,
  (req, res) => {
    res.send("Welcome to Users Route ✅");
  }
);

app4.use("/users", router);

app4.listen(3000, () => console.log("Server running on port 3000"));

// What happens here:
// Client → hits /users?auth=true.
// checkAuth runs → if OK → next().
// logRequest runs → logs request.
// addHeader runs → modifies response.
// Finally → route handler runs → res.send("...").


// iii) Error-handling middleware:

// Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.
// Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next):

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})



