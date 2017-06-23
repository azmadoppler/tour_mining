var fs = require('fs');
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDZA6lUixjsRpfgzaeBpVJHODCvOfriIGo'
});

var cleaner = require('./data_cleaning.js')

//Reach Data from txt and remove dupplicate
var array = fs.readFileSync('leftover.txt').toString().split("\n");
var unique = array.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})
unique.pop();
var currentUserID = [] ;
var arrayLat = [];
var arrayLon = [];
var counter = 0;
var noID = 0;

for(let i = 0 ; i < unique.length ; i++){
  if(!(unique[i].includes("User ID") ) ){
    continue;
  }

  let originalText = unique[i].replace(/ /g, '').replace("UserID:","").replace("Lattitute:","").replace("Longitute:","");
  let arrayData = originalText.split(",");
  // [0] = ID , [1] = Lat , [2] = Lon
  currentUserID.push(arrayData[0]);
  arrayLat.push(arrayData[2]);
  arrayLon.push(arrayData[3]);
}

var writtingID = "";
var myAddress = [];


var mapBotApp = setInterval(function(){
  writtingID = currentUserID[counter];
  // console.log("HERE in loop");
  mapAPIApp(arrayLat[counter],arrayLon[counter]);
  // coordinates_to_address(30,140);
  counter++;

} , 2*1000 )


var actualLocation = [];
var api_result = "";
var last_result = "";

function mapAPIApp(lat,lon){
  // console.log("HELOOOO" + lat + lon)
  googleMapsClient.reverseGeocode({
    latlng: [lat, lon]
  }, function(err, response) {
    // console.log(err);
    if (!err) {
      api_result = response.json.results[0].formatted_address;
      // console.log("HERE")

      //cleaner do something here
      console.log(api_result)

      let clean_result = cleaner(api_result);


      if(clean_result=="No Location Match"){
        //do nothing
      }
      else if(last_result==clean_result){
        //do nothing
      }
      else{
        last_result = clean_result;
        writeFileToTxt(clean_result);
      }
    }
    else{
      throw err;
    }
  });

}


function writeFileToTxt(rec_data){
  var toTxt = "";
  toTxt += "User ID : " + writtingID + ", Location : " + rec_data +"\n" ;
  var textName = "Keyword_Mapped.txt";
  fs.appendFile(textName, toTxt , function (err) {
    if (err) throw err;
    console.log('Saved!');
    toTxt = "";
    userGeo = [];
  });
}

//coordinates_to_address(35.6573965 , 139.74830925);
function coordinates_to_address(lat, lng) {
    var latlng = new googleMapsClient.maps.LatLng(lat, lng);

    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if(status == google.maps.GeocoderStatus.OK) {
            if(results[0]) {
                console.log((results[0].formatted_address));
            } else {
                alert('No results found');
            }
        } else {
            var error = {
                'ZERO_RESULTS': 'Kunde inte hitta adress'
            }
            console.log(error[status]);
        }
    });
}
