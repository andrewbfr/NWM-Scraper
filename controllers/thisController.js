var express = require("express");

var router = express.Router();

// Require all models
var db = require("../models");
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






// Export routes for server.js to use.
module.exports = router;