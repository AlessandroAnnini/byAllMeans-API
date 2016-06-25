/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Stop = require('../api/stop/stop.model');
var Line = require('../api/line/line.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

// Insert seed data below
var stopSeed = require('../api/stop/stop.seed.json');
var lineSeed = require('../api/line/line.seed.json');
var thingSeed = require('../api/thing/thing.seed.json');

// Insert seed inserts below
Stop.find({}).remove(function() {
	Stop.create(stopSeed);
});

Line.find({}).remove(function() {
	Line.create(lineSeed);
});

Thing.find({}).remove(function() {
  Thing.create(thingSeed);
});