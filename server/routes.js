/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/buss', require('./api/bus'));
  app.use('/api/checks', require('./api/check'));
  app.use('/api/stops', require('./api/stop'));
  app.use('/api/lines', require('./api/line'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));


};
