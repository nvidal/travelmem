var mongoose = require('mongoose');


var MemorySchema = new mongoose.Schema({
  place: String,
  kmeter: Number,
  description: String,
  when_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Memory', MemorySchema);