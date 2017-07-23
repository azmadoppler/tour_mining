var express = require('express');
var router = express.Router();
var Record = require('../models/Record')

router.get('/:keyword', function(req, res) {
  console.log("search for keyword")
  if (req.params.keyword == "anohana") {
    res.render('result_1', {ID: req.params.keyword});
  } else if (req.params.keyword == "lovelive") {
    res.render('result_2', {ID: req.params.keyword});
  } else {
    res.redirect('/')
  }
})

router.get('/search/:query', function(req, res) {
  Record.getRecordFromLocation(req.params.query,function(err , rows){
    if (err) {
      res.json(err);
    } else {
      // let result = Record.getAllRecord();
      // console.log(result);
      res.json(rows);
    }
  });
})
router.get('/find/all', function(req, res) {
  Record.getAllRecord(function(err, rows) {

    if (err) {
      res.json(err);
    } else {
      // let result = Record.getAllRecord();
      // console.log(result);
      res.json(rows);
    }

  });
  // res.json(result);

})

module.exports = router;
