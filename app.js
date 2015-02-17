var express = require("express");
var app = express();

app.get("/", function(request, response) {
  response.end("Welcome to Node.js");
});

console.log("Server has started. Listening on Port 5000.");
app.listen(5000); // Start the Server