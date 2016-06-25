'use strict';

var _ = require('lodash');
var Stop = require('./stop.model');

// Get list of stops
exports.index = function(req, res) {
  Stop.find(function (err, stops) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(stops);
  });
};

// Get a single stop
exports.show = function(req, res) {
  // Stop.findById(req.params.id, function (err, stop) {
  //   if(err) { return handleError(res, err); }
  //   if(!stop) { return res.status(404).send('Not Found'); }
  //   return res.json(stop);
  // });
  Stop.findOne({'properties.OBJECTID': req.params.id}, function (err, stop) {
    if(err) { return handleError(res, err); }
    if(!stop) { return res.status(404).send('Not Found'); }
    return res.json(stop);
  });
};

// Creates a new stop in the DB.
exports.create = function(req, res) {
  Stop.create(req.body, function(err, stop) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(stop);
  });
};

// Updates an existing stop in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Stop.findById(req.params.id, function (err, stop) {
    if (err) { return handleError(res, err); }
    if(!stop) { return res.status(404).send('Not Found'); }
    var updated = _.merge(stop, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(stop);
    });
  });
};

// Deletes a stop from the DB.
exports.destroy = function(req, res) {
  Stop.findById(req.params.id, function (err, stop) {
    if(err) { return handleError(res, err); }
    if(!stop) { return res.status(404).send('Not Found'); }
    stop.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
