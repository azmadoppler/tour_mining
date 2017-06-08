console.log('testing bot is started');

var Twit = require('twit');
var config = require('./config');
var fs = require('fs');
var geoUser = [];

var T = new Twit(config);

var currentID ;


var queryPlace = "tokyotower";
// function mainApp(main_pointer){
//   var searchingTweet = {
//     q:'tokyotower OR 東京タワー -RT',
//     count: 100,
//     result_type: 'recent',
//     max_id: 871946667066609664
//   };
// }

function loopingTwitter(){
  var params = {
    q:'akihabara OR 東京タワー -RT',
    count: 100,
    result_type: 'recent',
    max_id: currentID
  };
  T.get('search/tweets', params, retrieveTweet);
}


var miningApp = setInterval(function(){
  loopingTwitter();
}, 10*1000);

//
// setTimeout(myStopFunction, 15 * 60 * 1000)
//
//
// function myStopFunction() {
//     console.log("The last tweeted ID is " + currentID)
//     clearInterval(miningApp);
// }

function retrieveTweet(err, data, response) {
  var counter = 0;
  if(err){
    console.log("Error has occured : " + err )
  }
  else {
    //Data Collection Part
    let tweets = data.statuses;
    for(var i = 0; i < tweets.length ; i ++){
        if(tweets[i].coordinates != null) {
          console.log("The Tweet Number : " + i +  " | The Tweet is " + tweets[i].text + "\n");
          console.log("The Username is : " + tweets[i].user.name + "\n");
          console.log("The Tweets ID is  : " + tweets[i].id_str + "\n");
          console.log("Lattitute " + tweets[i].coordinates.coordinates[0] + tweets[i].coordinates.coordinates[1]);
          let writtingText = "TokyoTower , User ID : " + tweets[i].user.id_str + " , Lattitute : " + tweets[i].coordinates.coordinates[1] + ", Longitute : " +  tweets[i].coordinates.coordinates[0] +" \n" ;
          geoUser.push(writtingText);
        }
        else {
          console.log("Twutter Number : " + i + " doesn't have coordinates")
        }
        currentID = tweets[i].id_str;
    }

    //Writing to File Part
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
    var textName = "test_recording"+queryPlace+".txt";
    fs.appendFile(textName, toTxt , function (err) {
      if (err) throw err;
      console.log('Saved!');
      toTxt = "";
      geoUser = [];
    });
  }
}


/////////////////////////////////////////////////////////
/////User Search Part////////////////////////////////////
/////////////////////////////////////////////////////////
function retrieveUser(err,data,response){
  if(err){
    console.log("Error has occured : " + err )
  }
  else {
    let tweets = data.statuses;
    console.log(tweets);
    for(let i = 0; i < tweets.length ; i ++){
      let user = tweets[i].user.name;
      let userID = tweets[i].user.id_str;
      let userParam = {
          user_id: userID,
          count: 3

      }
      T.get('statuses/user_timeline', userParam, callBackUser);

    }
  }
}

function callBackUser(err,data,response){
  console.log(data);
}

function tweetByID(id){
    var tweetDetail = {
      q: 'tokyotower'

    };
}
