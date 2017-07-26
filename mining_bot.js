console.log('testing bot is started');

var Twit = require('twit');
var config = require('./config');
var fs = require('fs');
var geoUser = [];

var T = new Twit(config);

var currentID;
var queryPlace = "akihabara";
function loopingTwitter() {
  var searchParams;
  var params = {
    q: "\"I" + "\'" + "m at\"    " + " (空港 OR 新幹線) -RT",
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

var miningApp = setInterval(function() {
  loopingTwitter();
}, 5 * 1000);

function retrieveTweet(err, data, response) {
  console.log("Getting the Data From Twitter")
  var counter = 0;
  if (err) {
    console.log("Error has occured : " + err)
  } else {
    //Data Collection Part
    let tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
      if (tweets[i].coordinates != null) {
        // console.log("The Tweet Number : " + i +  " | The Tweet is " + tweets[i].text + "\n");
        // console.log("The Username ID : " + tweets[i].user.id_str + "\n");
        // console.log("The Tweets ID is  : " + tweets[i].id_str + "\n");
        // console.log("The User Location is  : " + tweets[i].user.location + "\n");
        // console.log("Lattitute " + tweets[i].coordinates.coordinates[0] +", Longitute: "+ tweets[i].coordinates.coordinates[1]);
        let writtingText = "User ID : " + tweets[i].user.id_str + " , Lattitute : " + tweets[i].coordinates.coordinates[1] + ", Longitute : " + tweets[i].coordinates.coordinates[0] + ", Tweet Number : " + tweets[i].id_str + ", User Location : " + tweets[i].user.location + ", Tweet Status : " + tweets[i].text;
        console.log(writtingText);
        geoUser.push(writtingText);
      } else {
        // console.log("Twutter Number : " + i + " doesn't have coordinates")
        // console.log("The Tweet Number : " + i +  " | The Tweet is " + tweets[i].text + "\n");
      }
      currentID = tweets[i].id_str;
    }

    //Writing to File Part
    // writeToText();
  }
}

function retrieveTweetNoGeo(err, data, response) {
  console.log("Getting the Data From Twitter")
  var counter = 0;
  if (err) {
    console.log("Error has occured : " + err)
  } else {
    //Data Collection Part
    let tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
      let writtingText = "User ID : " + tweets[i].user.id_str + ", Tweet Number : " + tweets[i].id_str + ", Tweet Status : " + tweets[i].text;
      console.log(writtingText);
      geoUser.push(writtingText);
      currentID = tweets[i].id_str;
    }

    //Writing to File Part
    writeToText();
  }
}

function writeToText() {
  var toTxt = "";
  console.log("Last Tweeted At " + currentID);
  for (let i = 0; i < geoUser.length; i++) {
    if (geoUser[i] == 'undefined') {} else {
      toTxt += geoUser[i] + "\n";
    }
  }
  var textName = "user_with_keywords.txt";
  fs.appendFile(textName, toTxt, function(err) {
    if (err)
      throw err;
    console.log('Saved!');
    toTxt = "";
    geoUser = [];
  });
}
