var express = require('express');
var router = express.Router();
var Record = require('../models/Record')

router.get('/search/:keyword?', function(req, res) {
  console.log("parameter " + req.params.keyword)
  if (!req.params.keyword) {
    Record.getAllRecord(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        // let result = Record.getAllRecord();
        // console.log(result);
        res.json(rows);
      }
    });
  } else {
    Record.getRecordFromLocation(req.params.keyword, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        // let result = Record.getAllRecord();
        // console.log(result);
        res.json(rows);
      }
    });

  }

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
