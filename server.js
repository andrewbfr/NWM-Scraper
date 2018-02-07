var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Initialize Express
var app = express();

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
// Require all models
var db = require("./models");

var PORT = process.env.PORT || 3000;


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
// require("./routes/html-routes.js")(app);

// Import routes and give the server access to them.
var routes = require("./controllers/thisController.js");
var router = express.Router();

// Require all models
var db = require("./models");
// Routes
console.log("I am html-routes");

router.get("/", function(req, res) {

router.get("/list", function(req, res) {
    console.log("searching for database");
    db.Article
    .find({})
    .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
    })
    .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
    });
    console.log("searched DB, rendering article objects");
    res.render("list", dbArticle);
});
});
// loads the list page and awaits scrape
router.get("/list", function(req, res) {
console.log("searching for database");
console.log(`This is the "res": ${res}`);
    db.Article
    .find({})
    .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        // res.json(dbArticle);
        console.log(dbArticle[0]);
        console.log("searched DB, rendering article objects");
        return res.render("list", dbArticle);
    })
    .catch(function(err) {
        // If an error occurred, send it to the client
        return res.json(err);
    }); 
    // res.end();
    
});
app.use(routes);

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/counterpunchDB", {
});


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
