var express = require("express");
var app = express();
var layouts = require("express-layout");
var jade = require("jade");

app.engine("jade", jade.__express);
app.set("view engine", "jade");

// Middleware
app.use(express.static("public")); // where to store the static files
app.use(layouts());
app.set("layout", "app_layout");

app.get("/", function(request, response) {
  response.render("index");
});

app.get("/questions/new", function(req, res) {
  res.render("questions/new");
});

console.log("Server has started. Listening on Port 5000.");
app.listen(5000); // Start the Server