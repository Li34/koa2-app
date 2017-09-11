const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NavSchema = new Schema({
  link: { type: String, required: true},
  text: { type: String, required: true},
});
NavSchema.index({text: 1});
module.exports = mongoose.model('Nav', NavSchema);