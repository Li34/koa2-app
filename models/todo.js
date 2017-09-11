const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NavSchema = new Schema({
  content: { type: String, required: true},
  done: { type: Boolean, required: true},
  belongs: { type: String, required: false}
});
NavSchema.index({content: 1});
module.exports = mongoose.model('Todo', NavSchema);
