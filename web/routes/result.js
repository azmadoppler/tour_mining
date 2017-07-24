var express = require('express');
var router = express.Router();
var Record = require('../models/Record')

router.get('/:keyword?', function(req, res) {
  // console.log("search for keyword")
  if (req.params.keyword == "anohana") {
    res.render('result_1', {ID: req.params.keyword});
  } else if (req.params.keyword == "lovelive") {
    res.render('result_2', {ID: req.params.keyword});
  } else if (req.params.keyword == "all") {
    res.render('result');
  } else {
    res.render('result')
  }
})

module.exports = router;
