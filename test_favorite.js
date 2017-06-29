var obj = {
    'test1': 100,
    'test2': 10
};
var text = 'text1'
console.log(obj.test1)



function frequencyCounting(){
  console.log(favoriteText.length);
  var kuromojiDictionary =   kuromoji.builder({ dicPath: "node_modules/kuromoji/dict" });
  for(let i = 0 ; i < favoriteText.length ; i++){
  kuromojiDictionary.build(function (err, tokenizer) {
      // tokenizer is ready
      var path = tokenizer.tokenize(favoriteText[i]);
      // console.log(path);
      for(k in path)
      {
        if(path[k].pos=="名詞"&&path[k].word_type=='KNOWN'){
          console.log(path[k])
        }
      }
    });
  }
}
