var express = require('express')
var app = express();

var port = process.env.PORT || 3000 ;

app.set('view engine' , 'ejs');

app.get('/' , function(req , res){
  // res.send()
})

app.use('/', function (req, res, next){
  console.log('Request URL : ' + req.url)
});




app.listen(port)
