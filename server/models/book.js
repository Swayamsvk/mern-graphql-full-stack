const mongooose = require("mongoose");
const Schema = mongooose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = mongoose.model("Book", bookSchema);
