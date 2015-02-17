var express = require("express");
var app = express();
var jade = require("jade");

app.engine("jade", jade.__express);
app.set("view engine", "jade");

app.get("/", function(request, response) {
  response.render("index");
});

console.log("Server has started. Listening on Port 5000.");
app.listen(5000); // Start the Server