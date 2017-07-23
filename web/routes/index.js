var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
  res.render('index');
});
router.get('/search' , function(req , res){
  return res.render('search');
})

router.post('/searching-keyword' , function(req , res){
  if(!req.body.input_keyword){
    res.redirect('/')
  }

  console.log(req.body.input_keyword)
  let rexEx = new RegExp(req.body.input_keyword,"i");
  let anoHanaSearchTerm = ["あの花"
  ,"あのはな"
  ,"secret base 君がくれたもの"
  ,"ZONE"
  ,"あの日見た花の名前を僕達はまだ知らない"
  ,"めんま"
  ,"本間芽衣子"
  ,"anohana"
  ];
  for(let i = 0 ; i < anoHanaSearchTerm.length;i++){
    if(anoHanaSearchTerm[i].search(rexEx)>=0){
      return res.redirect('/result/'+"anohana")
    }
  }
  let loveLiveSearchTerm = [
  "アイドル",
  "ラブライブ！ School idol project",
  "音ゲー",
  "μ's",
  "ミューズ",
  "スクールアイドル",
  "lovelive"
  ];
  for(let i = 0 ; i < loveLiveSearchTerm.length;i++){
    if(loveLiveSearchTerm[i].search(rexEx)>=0){
      return res.redirect('/result/'+"lovelive")
    }
  }

  return res.redirect('/result/noresult')
})
module.exports = router;
