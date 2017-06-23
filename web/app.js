var express = require('express')
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tour_mining'
});

app.set('view engine' , 'ejs');

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();

var port = process.env.PORT || 3000 ;


app.use('/assets',express.static(__dirname + '/public'))

app.get('/' , function(req , res){
  res.render('index');
})

app.use('/', function (req, res, next){
  console.log('Request URL : ' + req.url)
  next();
});




app.listen(8000)
