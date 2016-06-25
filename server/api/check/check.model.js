'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CheckSchema = new Schema({}, { strict: false });

module.exports = mongoose.model('Check', CheckSchema);
