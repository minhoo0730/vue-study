const mongoose = require('mongoose');
const idCountSchema = mongoose.Schema({
  id:{
    type:Number,
    default:0,
  }
})
const counter = mongoose.model("counter", idCountSchema);
module.exports = { counter };
