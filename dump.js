

var miningApp = setInterval(function(){
  loopingTwitter();
}, 60*1000);


setTimeout(myStopFunction, 15 * 60 * 1000)

// clears the interval

function myStopFunction() {
    console.log("The last tweeted ID is " + currentID)
    clearInterval(miningApp);
}
