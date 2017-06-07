console.log('testing bot is started');

var Twit = require('twit');
var config = require('./config');
var fs = require('fs');
var geoUser = [];

var T = new Twit(config);

var currentID = 868658996990705664;



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
var userTestID = 194782782;
var userDummy = {
    user_id: userTestID,
    count: 900
}

T.get('statuses/user_timeline', userDummy, callBackUser);

function dummyUserSearch(){


}

function callBackUser(err,data,response){
  if(!err){
    if(data.statuses.coordinates!=null)
    {

    }
    else{
      
    }
  }
  else{
  }
}

function tweetByID(id){
    var tweetDetail = {
      q: 'tokyotower'

    };
}
