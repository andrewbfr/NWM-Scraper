// Require all models
var db = require("../models");
// Routes

module.exports = function(app){
        console.log("I am html-routes");
        app.get("/", function(req, res) {
                res.redirect("/list");
        });

        // loads the list page and awaits scrape
        app.get("/list", function(req, res) {
            console.log(`This is the Request: ${req.body}`);
            console.log(`This is the Response: ${res.body}`);

            app.get("api/articles", function(req,res) {
                res.render("list", res)
            });
        // console.log("searching for database");
        // console.log(`This is the "res": ${res}`);
        // db.Article
        // .find({})
        // .then(function(dbArticle) {
        //     // If we were able to successfully find Articles, send them back to the client
        //     console.log(dbArticle[0]);
        //     console.log("searched DB, rendering article objects");
        //     if (err) {
        //         console.log(err);
        //     } else{
        //         console.log(dbArticle[0]);
        //         console.log("searched DB, rendering article objects");
        //         return res.render("list", dbArticle);
        //         //I need to get this object into the Handlebars template. I've tried it in three different files, different callback structures, still get errors in Node terminal or empty objects returned to the client's view. Pretty big bug that I haven't been able to get past.
        //     }
        // })
        // .catch(function(err) {
        //     // If an error occurred, send it to the client
        //     res.json(`Some error: ${err}`);
        // });
        // res.render("list", dbArticle);
    });
        
};