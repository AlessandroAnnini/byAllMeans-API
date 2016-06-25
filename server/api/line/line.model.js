'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LineSchema = new Schema({
  // OBJECTID: Double,
  // LINIEN: String,
  // UNTERNEHME: Boolean,
  // AKT_DATE: Object
}, {
  strict: false
});

// var LineSchema = new Schema({ any: Schema.Types.Mixed });

module.exports = mongoose.model('Line', LineSchema);
