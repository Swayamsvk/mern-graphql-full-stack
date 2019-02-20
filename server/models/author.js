const mongooose = require("mongoose");
const Schema = mongooose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model("Author", authorSchema);
