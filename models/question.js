var mongoose = require("mongoose");
var QuestionSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String
});

module.exports = mongoose.model('Question', QuestionSchema);