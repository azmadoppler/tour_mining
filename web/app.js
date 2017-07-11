var express = require('express')
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tour_mining'
});
var bodyParser = require('body-parser')


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.set('view engine' , 'ejs');

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();

var port = process.env.PORT || 3001 ;


app.use('/assets',express.static(__dirname + '/public/'))

app.get('/' , function(req , res){
  res.render('index');
})
app.get('/search' , function(req , res){
  res.render('search');
})
app.get('/result' , function(req , res){
  res.render('result');
})

app.post('/searching-keyword' , function(req , res){
  if(!req.body.input_keyword){
    res.redirect('/')
  }

  console.log(req.body.input_keyword)
  let rexEx = new RegExp(req.body.input_keyword,"i");
  let searchTerm = ["あの花"
  ,"あのはな"
  ,"secret base 君がくれたもの"
  ,"ZONE"
  ,"あの日見た花の名前を僕達はまだ知らない"
  ,"めんま"
  ,"本間芽衣子"
  ,"anohana"
  ];
  for(let i = 0 ; i < searchTerm.length;i++){
    if(searchTerm[i].search(rexEx)>=0){
      res.redirect('/result')
    }
  }
  res.redirect('/')
})
app.use('/', function (req, res, next){
  console.log('Request URL : ' + req.url)
  next();
});

app.listen(port)
