module.exports = function(app) {
  app.get("/questions/new", function(req, res) {
    res.render("questions/new");
  });

  app.post('/questions', function(req, res) {
    res.end(req.body.title);
  });
}