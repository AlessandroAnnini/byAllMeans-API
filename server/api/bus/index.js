'use strict';

var express = require('express');
var controller = require('./bus.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/number/:number', controller.showByNumber);
router.get('/plate/:plate', controller.showByPlate);
router.get('/line/:line', controller.showByLine);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.put('/number/:number', controller.updateByNumber);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
