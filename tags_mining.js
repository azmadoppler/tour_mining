console.log('testing bot is started');

var Twit = require('twit');
var config = require('./config');
var fs = require('fs');
var geoUser = [];

var T = new Twit(config);//insert your config here

var currentID ;
var searchParameter = 'ラーメン おいし';
function loopingTwitter(){
  //insert your parameter here
  var params = {
    q: searchParameter + " -RT" ,//insert tags here
    // q: "I\'m at -RT",
    count: 100,
    result_type: 'recent',
    max_id: currentID,
    //YYYY-MM-DD
    // until: '2017-06-08',
    // geocode:'35.7022,139.7741,500km'
  };
  T.get('search/tweets', params, retrieveTweet);
}


var miningApp = setInterval(function(){
  loopingTwitter();
}, 5*1000);

function favouriteMining(){
  T.get('favorites/list', fav, printFav);
}

function retrieveTweet(err, data, response) {
  console.log("Getting the Data From Twitter")
  var counter = 0;
  if(err){
    console.log("Error has occured : " + err )
  }
  else {
    //Data Collection Part
    let tweets = data.statuses;
    for(var i = 0; i < tweets.length ; i ++){
      if(tweets[i].coordinates != null) {
        let writtingText = "User ID : " + tweets[i].user.id_str +" , Lattitute : " + tweets[i].coordinates.coordinates[1] + ", Longitute : " +
        tweets[i].coordinates.coordinates[0]+", Input Parameter : "+ searchParameter + ", Tweet Status : "+ tweets[i].text  ;
        console.log(writtingText);
        geoUser.push(writtingText);
      }
      currentID = tweets[i].id_str;
    }

    //Writing to File Part
    // writeToText();
  }
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
  var textName = "user_with_keywords.txt"; //output file name
  fs.appendFile(textName, toTxt , function (err) {
    if (err) throw err;
    console.log('Saved!');
    toTxt = "";
    geoUser = [];
  });
}
