var Question = require('../models/question');

module.exports = function(app) {
  app.get("/questions/new", function(req, res) {
    res.render("questions/new");
  });

  app.post('/questions', function(req, res) {
    var question = new Question({
      title: req.body.title,
      description: req.body.description
    });
    question.save(function(error, the_question) {
      if (error) {
        res.render('/questions/new');
      } else {
        res.redirect('/questions/' + the_question.id)
      }
    });
  });
}