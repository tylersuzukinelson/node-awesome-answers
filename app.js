var express = require("express"),
    layouts = require("express-layout"),
    jade = require("jade"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

var app = express();

// Middleware
app.use(express.static("public")); // where to store the static files
app.use(layouts());
app.use(bodyParser());

app.engine("jade", jade.__express);
app.set("view engine", "jade");
app.set("layout", "app_layout");

// DB
mongoose.connect('mongodb://localhost/awesome_answers');

var questions_controller = require('./controllers/questions');
questions_controller(app);

app.get("/", function(request, response) {
  response.render("index");
});

console.log("Server has started. Listening on Port 5000.");
app.listen(5000); // Start the Server