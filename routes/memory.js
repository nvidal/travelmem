var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Memory = require('../models/Memory.js');

/* GET ALL MemoryS */
router.get('/', function(req, res, next) {
  Memory.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Memory BY ID */
router.get('/:id', function(req, res, next) {
  Memory.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Memory */
router.post('/', function(req, res, next) {
  Memory.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Memory */
router.put('/:id', function(req, res, next) {
  Memory.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Memory */
router.delete('/:id', function(req, res, next) {
  Memory.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;