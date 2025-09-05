const http = require('http')

let server = http.createServer((req, res)=>{
    console.log(req);
    console.log(res);
    res.writeHead(200,{'Content-type' : 'text/plain'});

    res.end(`this is content`);
})

server.listen(3000,()=>{
    console.log(`Server running on http://localhost:3000`)
})

//---------------------------------------------------------

// Core res methods in Node.js (http module)
// res.writeHead(statusCode, headers) → Sets status & headers.
// res.writeHead(200, { 'Content-Type': 'text/html' });
// res.write(data) → Sends a chunk of the response body (you can call multiple times).
// res.write("Hello ");
// res.write("World!");
// res.end([data]) → Ends the response (optional final data).
// res.end("Done ✅");
// These 3 are enough for most raw http server work.



// req properties in http module

// req.method
// Client ka HTTP method (GET, POST, PUT, DELETE, etc.).
// Sabse zyada use hota hai request ko handle karne ke liye.

var server1 = http.createServer((req, res)=>{
    console.log(req);
    console.log(res);
    res.writeHead(200,{'Content-type' : 'text/plain'});

console.log(req.method); // "GET"


// req.url
// Requested path + query string.
// 👉 Router banane ke liye useful.

console.log(req.url); // "/users?id=101"


// req.headers
// Saare headers (content-type, authorization, cookies, etc.).
// 👉 Authentication, parsing, debugging sab me use hota hai.

console.log(req.headers['content-type']); 


// Request body (stream)
// Raw POST/PUT body data stream ke form me milta hai.

let body = "";
req.on("data", chunk => { body += chunk; });
req.on("end", () => console.log("Body:", body));


// req.httpVersion
// HTTP protocol version check karne ke liye.

console.log(req.httpVersion); // "1.1"


// req.socket.remoteAddress
// Client ka IP address.
// 👉 Logging, security, analytics ke liye.

console.log(req.socket.remoteAddress);


// req.socket.remotePort
// Client ka port number. Rare, but kabhi kabhi debugging me kaam aata hai.

console.log(req.socket.remotePort);


// req.complete
// Boolean: request body completely receive hui ya nahi.

console.log(req.complete); // true/false


// req.connection (alias of req.socket)
// Underlying TCP connection object.
// 👉 Advanced networking cases me use hota hai.

console.log(req.connection.encrypted); // true if HTTPS


// req.headers['user-agent']
// Most common header check (client info).
// 👉 Analytics/logging me kaam aata hai.

console.log(req.headers['user-agent']);

    res.end(`this is content`);
})

server1.listen(3001,()=>{
    console.log(`Server running on http:localhost:3001`)
});

//-------------------------------------------------------
// The things we cannot do   ( gives error)

// const http = require('http')

var server2 = http.createServer((req, res)=>{
    console.log(req);
    console.log(res);
    res.writeHead(200,{'Content-type' :  ['text/plain', 'text/html']});   // sending multiple types

    res.end(`this is content`);
    res.end(`this pmo`);            // cant sent both end
})

server2.listen(3002,()=>{
    console.log(`Server running on http://localhost:3002`)
})

//---------------------------------------------------------
// for 1 endpoint we can only send 1 http request (*Note)

// const http = require("http");
const { resourceLimits } = require('worker_threads');

let server3 = http.createServer((req, res) => {
  if (req.url === "/") {
    // HTML Response
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Mini Server</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <h1>Hello, Karan 🚀</h1>
        <p>This is served from Node.js</p>
        <button onclick="greet()">Click Me</button>
        <script src="/script.js"></script>
      </body>
      </html>
    `);
    res.end();
  } else if (req.url === "/style.css") {
    // CSS Response
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(`
      body { font-family: Arial; background: #111; color: #eee; text-align: center; }
      h1 { color: cyan; }
      button { padding: 10px 20px; background: lime; border: none; cursor: pointer; }
    `);
    res.end();
  } else if (req.url === "/script.js") {
    // JavaScript Response
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.write(`
      function greet() {
        alert("Hello Karan 😎 — Button Clicked!");
      }
    `);
    res.end();
  } else {
    // 404 Response
    res.writeHead(404, { "Content-Type": "text/plain" });

    res.write("Wrong url");
    res.write("404 Not Found");
    res.end()
  }
});

server3.listen(3003, () => {
  console.log("Server running at http://localhost:3003");
});

