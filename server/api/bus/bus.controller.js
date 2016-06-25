'use strict';

var _ = require('lodash');
var Bus = require('./bus.model');

// Get list of buss
exports.index = function(req, res) {
  Bus.find(function (err, buss) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(buss);
  });
};

// Get a single bus
exports.show = function(req, res) {
  Bus.findById(req.params.id, function (err, bus) {
    if(err) { return handleError(res, err); }
    if(!bus) { return res.status(404).send('Not Found'); }
    return res.json(bus);
  });
};

exports.showByNumber = function(req, res) {
  Bus.findOne({number: req.params.number}, function (err, bus) {
    if(err) { return handleError(res, err); }
    if(!bus) { return res.status(404).send('Not Found'); }
    return res.json(bus);
  });
};

exports.showByPlate = function(req, res) {
  Bus.findOne({plate: req.params.plate}, function (err, bus) {
    if(err) { return handleError(res, err); }
    if(!bus) { return res.status(404).send('Not Found'); }
    return res.json(bus);
  });
};

exports.showByLine = function(req, res) {
  Bus.findOne({lineId: req.params.line}, function (err, bus) {
    if(err) { return handleError(res, err); }
    if(!bus) { return res.status(404).send('Not Found'); }
    return res.json(bus);
  });
};

// Creates a new bus in the DB.
exports.create = function(req, res) {
  Bus.create(req.body, function(err, bus) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(bus);
  });
};

// Updates an existing bus in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bus.findById(req.params.id, function (err, bus) {
    if (err) { return handleError(res, err); }
    if(!bus) { return res.status(404).send('Not Found'); }
    var updated = _.merge(bus, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(bus);
    });
  });
};

exports.updateByNumber = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bus.findById({number: req.params.number}, function (err, bus) {
    if (err) { return handleError(res, err); }
    if(!bus) { return res.status(404).send('Not Found'); }
    var updated = _.merge(bus, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(bus);
    });
  });
};

// Deletes a bus from the DB.
exports.destroy = function(req, res) {
  Bus.findById(req.params.id, function (err, bus) {
    if(err) { return handleError(res, err); }
    if(!bus) { return res.status(404).send('Not Found'); }
    bus.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
