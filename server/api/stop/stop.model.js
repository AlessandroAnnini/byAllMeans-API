'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StopSchema = new Schema({}, { strict: false });

module.exports = mongoose.model('Stop', StopSchema);
