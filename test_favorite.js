var fs = require('fs');

var array = fs.readFileSync('tags_and_location.txt').toString().split("\r\n");
var unique = array.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})
unique.pop();
var currentUserID = [] ;
var locations = [];
var counter = 0;
var noID = 0;
for(let i = 0 ; i < unique.length ; i++){
  if(!(unique[i].includes("User ID") ) ){
    continue;
  }
  //clean read data process
  let originalText = unique[i].replace(/ /g, '').replace("InputKeyword:","").replace("UserID:","").replace("Location:","");
  let arrayData = originalText.split(",");
  // [0] = ID , [1] = Lat , [2] = Lon
  // console.log(arrayData)
  currentUserID.push(arrayData[0]);
  locations.push(arrayData[1]);

}
var resultCollection = {};

for(let i = 0 ; i < locations.length ; i++){
  let text = locations[i]
  if(text in resultCollection) {
    let oldValue = resultCollection[text]
    resultCollection[text] = oldValue+1;

  }
  else {
    resultCollection[text] = 1
  }
}

function writeFileToTxt(){
  var toTxt = "";
  toTxt += "User ID : " + writtingID + ", Location : " + rec_data+ ", Input Keyword : " + writtingLocation   +"\n" ;
  var textName = "tags_and_location.txt";
  fs.appendFile(textName, toTxt , function (err) {
    if (err) throw err;
    console.log('Saved!');
    toTxt = "";
    userGeo = [];
  });
}
