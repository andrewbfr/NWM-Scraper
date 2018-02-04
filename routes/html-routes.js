// Routes

module.exports = function(app){
    console.log("I am html-routes");
    app.get("/", function(req, res) {
        // var ssn = req.session;
        // if (!ssn.username) {
        //   res.redirect("login");
        //   return
        // }
        // res.render("swyppa");
        res.render("list");
      });
      // loads the list page and awaits scrape
      // app.get("/list", function(req, res) {
      // });
      
};