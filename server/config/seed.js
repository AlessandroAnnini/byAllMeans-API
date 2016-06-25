/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Check = require('../api/check/check.model');
var Stop = require('../api/stop/stop.model');
var Line = require('../api/line/line.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

// Insert seed data below
var checkSeed = require('../api/check/check.seed.json');
var stopSeed = require('../api/stop/stop.seed.json');
var lineSeed = require('../api/line/line.seed.json');
var thingSeed = require('../api/thing/thing.seed.json');
var userSeed = require('../api/user/user.seed.json');

// Insert seed inserts below
Check.find({}).remove(function() {
	Check.create(checkSeed);
});

// Stop.find({}).remove(function() {
// 	Stop.create(stopSeed);
// });
//
// Line.find({}).remove(function() {
// 	Line.create(lineSeed);
// });

Thing.find({}).remove(function() {
  Thing.create(thingSeed);
});

User.find({}).remove(function() {
  User.create(userSeed);
});
