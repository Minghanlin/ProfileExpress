
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var indexSchema = new Schema ({
  name: String,
  age: Number,
  email: String,
  contactnum: Number,
  dateofbirth: String,
  facebook: String,
  linkedin: String,
  emailme: String
});

mongoose.model('Detail', detailSchema);
