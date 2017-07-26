var fs = require('fs')
var array = fs.readFileSync('Keyword_Mapped_v3.txt').toString().split("\n");
var unique = array.filter(function(elem, index, self) {
  return index == self.indexOf(elem);
})
unique.pop();

var currentUserID = []
var locations = []
var counter = 0
var noID = 0
var startingRecordID = 75;

for (let i = 0; i < unique.length; i++) {
  if (!(unique[i].includes("User ID"))) {
    continue;
  }

  let originalText = unique[i].replace(/ /g, '').replace("UserID:", "").replace("Location:", "");
  let arrayData = originalText.split(",");
  // [0] = ID , [1] = Lat , [2] = Lon
  currentUserID.push(arrayData[0]);
  locations.push(arrayData[1]);
}

for (let i = 0; i < currentUserID.length; i++) {

  if (currentUserID[i] === currentUserID[i + 1]) {
    console.log("User ID : " + currentUserID[i] + ", Record Number : " + startingRecordID + ", From : " + locations[i] + ", To : " + locations[i + 1])
  } else {
    {
      startingRecordID++;
    }
  }
}

function writeFileToTxt(rec_data) {
  var toTxt = "";
  toTxt += "User ID : " + writtingID + ", Location : " + rec_data + ", Created At : " + writtingDate + "\n";
  var textName = "Keyword_Mapped_v3.txt";
  fs.appendFile(textName, toTxt, function(err) {
    if (err)
      throw err;
    console.log('Saved!');
    toTxt = "";
    userGeo = [];
  });
}
