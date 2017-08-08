console.log('testing bot is started');

var Twit = require('twit');
var config = require('./config');
var fs = require('fs');
var geoUser = [];

var T = new Twit(config);

var array = fs.readFileSync('mining_bot_dupe_D2_M8.txt').toString().split("\n");
var unique = array.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})
unique.pop();
//extraction variable
var currentUserID = [] ;
var arrayLat = [];
var arrayLon = [];
var currentTwitterID = [];
var twitterLocation = [];

//runner variable
var runner = 0;
var userGeo = [];

// console.log(unique)
for(let i = 0 ; i < unique.length ; i++){
  let originalText = unique[i].replace(/ /g, '').replace("UserID:", "").replace("Lattitute:", "").replace("Longitute:", "").replace('TweetNumber:',"").replace('TweetStatus:', "");
  let arrayData = originalText.split(",");
  // console.log(arrayData)
  // [0] = userID , [1] = Lat , [2] = Lon // [3] = twitterID // [4] location
  console.log(arrayData)
  currentUserID.push(arrayData[0]);
  arrayLat.push(arrayData[1]);
  arrayLon.push(arrayData[2]);
  currentTwitterID.push(arrayData[3]);
  // if(isBlank(arrayData[4]) || isEmpty(arrayData[4]))
  // {
  //   twitterLocation.push("No Location")
  // }
  // else {
  //   twitterLocation.push(arrayData[4]);
  // }
}


var userBotApp = setInterval(function(){
  // console.log("Current ID " + idValue)
  // console.log(currentUserID[runner])
  var userDummy = {
      user_id: currentUserID[runner],
      count: 900,
      since_id: currentTwitterID[runner],
  };

  T.get('statuses/user_timeline', userDummy, geoMining);

} , 5*1000 )



function geoMining(err,data,response){
  if(err){
    console.log("ERROR OCCURED : " + err)
    runner++;
  }

  else{
      let tweets = data;
      // console.log(data)
      for(let i = 0 ; i < tweets.length ; i++)
      {
          if(tweets[i].coordinates!=null)
          {
            // console.log("Lattitute : " + tweets[i].coordinates.coordinates[1] + ", Longitute : " + tweets[i].coordinates.coordinates[0]);
            let writtingText = "User ID : "+ tweets[i].user.id_str + ",Tweet ID : " + tweets[i].id_str + " , Lattitute : " + tweets[i].coordinates.coordinates[1] + ", Longitute : " +  tweets[i].coordinates.coordinates[0] + ", Created : " + tweets[i].created_at;
            console.log(writtingText);
            userGeo.push(writtingText);
          }
          else{
          }
          currentID = tweets[i].id_str;
      }
      // console.log("Last Tweeted At "+ currentID + "\n");
      writeFileToTxt();
    }
}
function placeMining(err,data,response){
  if(err){
    console.log("ERROR OCCURED : " + err)
  }
  else{
      let tweets = data;
      for(let i = 0 ; i < tweets.length ; i++)
      {
          if(tweets[i].place!=null)
          {
            let writtingText = "User ID : " + tweets[i].user.id_str + ", Visit : "+tweets[i].place.full_name +", Date : " + tweets[i].created_at ;
            userGeo.push(writtingText);

          }
          else{
          }
          currentID = tweets[i].id_str;
      }
      // console.log("Last Tweeted At "+ currentID + "\n");
      writeFileToTxt();

    }
}


function writeFileToTxt(){
  var toTxt = "";
  for(let i = 0 ; i < userGeo.length ; i++)
  {
    if(userGeo[i] == 'undefined'){

    }
    else {
      toTxt += userGeo[i] + "\n";
    }
  }
  var textName = "z_user_bot_detail_D2_record.txt";
  runner++;
  fs.appendFile(textName, toTxt , function (err) {
    if (err) throw err;
    console.log('Saved!');
    toTxt = "";
    userGeo = [];
  });
}

function tweetByID(id){
    var tweetDetail = {
      q: 'tokyotower'

    };
}


function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}
function isEmpty(str) {
    return (!str || 0 === str.length);
}
