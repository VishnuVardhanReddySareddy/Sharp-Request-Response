const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("<h1>This is Home Page</h1>");
      break;

    case "/home":
      res.statusCode = 200;
      res.end("<h1>Welcome home</h1>");
      break;

    case "/about":
      res.statusCode = 200;
      res.end("<h1>Welcome to About Us</h1>");
      break;

    case "/node":
      res.statusCode = 200;
      res.end("<h1>Welcome to my Node Js project</h1>");
      break;

    default:
      res.statusCode = 404;
      res.end("<h1>Page Not Found</h1>");
      break;
  }
});

let port = 3000;
server.listen(port, () => {
  console.log("The server is running on port " + port);
});
