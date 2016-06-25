'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StopSchema = new Schema({
  // name: String,
  // info: String,
  // active: Boolean
}, {
  strict: false
});

module.exports = mongoose.model('Stop', StopSchema);
