// HTTP is one of the powerful modules in the node.js world that we use in networking
// applications. We can create a server that listens to HTTP requests in a certain port
// with this functionality we can create the backend for our application. Here, I will
// be creating a server that listens to a given port number.

const http = require("http");

http
  .createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Hello PieCyfer</h1>");
    response.end();
  })
  .listen(3000);

