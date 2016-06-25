'use strict';

var _ = require('lodash');
var Line = require('./line.model');

// Get list of lines
exports.index = function(req, res) {
  Line.find(function (err, lines) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(lines);
  });
};

// Get a single line
exports.show = function(req, res) {
  // Line.findById(req.params.id, function (err, line) {
  //   if(err) { return handleError(res, err); }
  //   if(!line) { return res.status(404).send('Not Found'); }
  //   return res.json(line);
  // });
  console.log(req.params.id);

  // Line.find({'properties.LINIEN': req.params.id.toString()}, function(err, line) {
  //   if(err) { console.log(err); return handleError(res, err); }
  //   if(!line) { return res.status(404).send('Not Found'); }
  //   console.log(line);
  //   return res.json(line[0]);
  // });

  Line.find()
    .then(function(err, line) {
      if(err) { console.log(err); return handleError(res, err); }
      if(!line) { return res.status(404).send('Not Found'); }
      console.log(line);
      return res.json(line[0]);
    });
};

// Creates a new line in the DB.
exports.create = function(req, res) {
  Line.create(req.body, function(err, line) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(line);
  });
};

// Updates an existing line in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Line.findById(req.params.id, function (err, line) {
    if (err) { return handleError(res, err); }
    if(!line) { return res.status(404).send('Not Found'); }
    var updated = _.merge(line, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(line);
    });
  });
};

// Deletes a line from the DB.
exports.destroy = function(req, res) {
  Line.findById(req.params.id, function (err, line) {
    if(err) { return handleError(res, err); }
    if(!line) { return res.status(404).send('Not Found'); }
    line.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
