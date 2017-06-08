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


//prepare the data
var array = fs.readFileSync('tokyotower_userid.txt').toString().split("\n");
var unique = array.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})



var userGeo = [];
var userTestID = 194782782;
var currentID ;
var userDummy = {
    user_id: userTestID,
    count: 900,
    max_id: currentID
}

T.get('statuses/user_timeline', userDummy, callBackUser);

function dummyUserSearch(){


}

function callBackUser(err,data,response){
  if(err){
    console.log("ERROR OCCURED : " + err)
  }

  else{
      let tweets = data;
      console.log()
      for(let i = 0 ; i < tweets.length ; i++)
      {
          if(tweets[i].coordinates!=null)
          {
            console.log("Lattitute : " + tweets[i].coordinates.coordinates[1] + ", Longitute : " + tweets[i].coordinates.coordinates[0]);
            let writtingText = "User ID : " + tweets[i].user.id_str + " , Lattitute : " + tweets[i].coordinates.coordinates[1] + ", Longitute : " +  tweets[i].coordinates.coordinates[0] +" \n" ;
            userGeo.push(writtingText);
          }
          else{
          }
          currentID = tweets[i].id_str;
      }
      //////writing a file///////
      var toTxt = "";
      console.log("Last Tweeted At "+ currentID);
      for(let i = 0 ; i < userGeo.length ; i++)
      {
        if(geoUser[i] == 'undefined'){

        }
        else {
          toTxt += userGeo[i] + "\n";
        }
      }
      var textName = "information from user ID "+userTestID+".txt";
      fs.appendFile(textName, toTxt , function (err) {
        if (err) throw err;
        console.log('Saved!');
        toTxt = "";
        userGeo = [];
      });
    }
}

function tweetByID(id){
    var tweetDetail = {
      q: 'tokyotower'

    };
}
