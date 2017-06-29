var kuromoji = require("kuromoji");
var Twit = require('twit');
var config = require('./config');
var fs = require('fs');

var T = new Twit(config);

console.log('favorite bot is started');

var favoriteText = [];
var runner = 0;
var userGeo = [];
var userTestID = 0;
var currentID ;

var userTestIDString ="";

mainApp();

function mainApp(){
  favouriteMining();
};
//prepare the data
// var array = fs.readFileSync('tokyotower_userid.txt').toString().split("\n");
// var unique = array.filter(function(elem, index, self) {
//     return index == self.indexOf(elem);
// })
// unique.pop(); //unique is now all of the unique id

function readFileFromText(){

}

//mining process
// var miningApp = setInterval(function(){
//   loopingTwitter();
// }, 5*1000);


function favouriteMining(){
    var fav = {
      user_id: 123521037,
      count: 200
    };
    T.get('favorites/list', fav, printFav);
}


function printFav(err,data,response){
  let tweets = data;
  for(var i = 0; i < tweets.length ; i ++){
      favoriteText.push(tweets[i].text);
  }
  frequencyCounting();
}


function frequencyCounting(){
  console.log(favoriteText.length);
  var kuromojiDictionary =   kuromoji.builder({ dicPath: "node_modules/kuromoji/dict" });

  kuromojiDictionary.build(function (err, tokenizer) {
    for(let i = 0 ; i < favoriteText.length ; i++){
      // tokenizer is ready
      var path = tokenizer.tokenize(favoriteText[i]);
      // console.log(path);
      var data = [];
      var trueWord = [];
      for(k in path)
      {
        if(path[k].pos=="名詞"&&path[k].word_type=='KNOWN'){
          for ( var j in data){
            if(data[j] === path[k].surface_form){
              trueWord.push(path[k].surface_form)
            }
          }
          data.push(path[k].surface_form)
        }
      }

      var unique = trueWord.filter(function(elem, index, self) {
          return index == self.indexOf(elem);
      })
      for(var l in unique){
        console.log(unique[l])
      }
  }
    });

}



function writeToText(){
  var toTxt = "";
  console.log("Last Tweeted At "+ currentID);
  for(let i = 0 ; i < geoUser.length ; i++)
  {
    if(geoUser[i] == 'undefined'){

    }
    else {
      toTxt += geoUser[i] + "\n";
    }
  }
  var textName = "user_favorite.txt";
  fs.appendFile(textName, toTxt , function (err) {
    if (err) throw err;
    console.log('Saved!');
    toTxt = "";
    geoUser = [];
  });
}
