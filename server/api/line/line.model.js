'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LineSchema = new Schema({}, { strict: false });

module.exports = mongoose.model('Line', LineSchema);
