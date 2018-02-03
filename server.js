var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");
// Set default/homepage layout template
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app)

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/counterpunchDB", {
});


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
