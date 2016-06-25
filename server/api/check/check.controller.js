'use strict';

var _ = require('lodash');
var Check = require('./check.model');

// Get list of checks
exports.index = function(req, res) {
  Check.find(function (err, checks) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(checks);
  });
};

// Get a single check
exports.show = function(req, res) {
  Check.findById(req.params.id, function (err, check) {
    if(err) { return handleError(res, err); }
    if(!check) { return res.status(404).send('Not Found'); }
    return res.json(check);
  });
};

// Creates a new check in the DB.
exports.create = function(req, res) {
  Check.create(req.body, function(err, check) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(check);
  });
};

// Updates an existing check in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Check.findById(req.params.id, function (err, check) {
    if (err) { return handleError(res, err); }
    if(!check) { return res.status(404).send('Not Found'); }
    var updated = _.merge(check, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(check);
    });
  });
};

// Deletes a check from the DB.
exports.destroy = function(req, res) {
  Check.findById(req.params.id, function (err, check) {
    if(err) { return handleError(res, err); }
    if(!check) { return res.status(404).send('Not Found'); }
    check.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}