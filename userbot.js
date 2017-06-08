console.log('testing bot is started');

var Twit = require('twit');
var config = require('./config');
var fs = require('fs');
var geoUser = [];

var T = new Twit(config);




/////////////////////////////////////////////////////////
/////User Search Part////////////////////////////////////
/////////////////////////////////////////////////////////
// function retrieveUser(err,data,response){
//   if(err){
//     console.log("Error has occured : " + err )
//   }
//   else {
//     let tweets = data.statuses;
//     console.log(tweets);
//     for(let i = 0; i < tweets.length ; i ++){
//       let user = tweets[i].user.name;
//       let userID = tweets[i].user.id_str;
//       let userParam = {
//           user_id: userID,
//           count: 3
//
//       }
//       T.get('statuses/user_timeline', userParam, callBackUser);
//
//     }
//   }
// }



var runner = 0;
var userGeo = [];
var userTestID = 0;
var currentID ;

var userTestIDString ="";

//prepare the data
var array = fs.readFileSync('tokyotower_userid.txt').toString().split("\n");
var unique = array.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})
unique.pop(); //unique is now all of the unique id

var userBotApp = setInterval(function(){
  userTestID = unique.pop();
  console.log(userTestIDString);
  var userDummy = {
      user_id: userTestID,
      count: 900,
  };

  T.get('statuses/user_timeline', userDummy, geoMining);

} , 5*1000 )



function geoMining(err,data,response){
  if(err){
    console.log("ERROR OCCURED : " + err)
  }

  else{
      let tweets = data;
      for(let i = 0 ; i < tweets.length ; i++)
      {
          if(tweets[i].coordinates!=null)
          {
            // console.log("Lattitute : " + tweets[i].coordinates.coordinates[1] + ", Longitute : " + tweets[i].coordinates.coordinates[0]);
            let writtingText = "User ID : " + tweets[i].user.id_str + " , Lattitute : " + tweets[i].coordinates.coordinates[1] + ", Longitute : " +  tweets[i].coordinates.coordinates[0] +" \n" ;
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

  var textName = "test_recording"+runner+"_record.txt";
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
