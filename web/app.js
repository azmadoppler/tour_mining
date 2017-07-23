var express = require('express')
var app = express();
var mysql  = require('mysql');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var routes = require('./routes/index');
var result = require('./routes/result')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tour_mining'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});



var bodyParser = require('body-parser')


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));



app.set('view engine' , 'ejs');
var port = process.env.PORT || 3001 ;

app.use('/assets', express.static(path.join(__dirname, 'public')))

app.use('/', routes);
app.use('/result',result)
app.use('/', function (req, res, next){
  console.log('Request URL : ' + req.url)
  next();
});

app.listen(port)
