'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BusSchema = new Schema({}, { strict: false });

module.exports = mongoose.model('Bus', BusSchema);
