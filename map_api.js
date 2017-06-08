var fs = require('fs');
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDZA6lUixjsRpfgzaeBpVJHODCvOfriIGo'
});

//Reach Data from txt and remove dupplicate
var array = fs.readFileSync('tokyotower_userid.txt').toString().split("\n");
var unique = array.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})

for(i in unique) {
    // console.log(unique[i]);
}
var myAddress = [];
googleMapsClient.reverseGeocode({
  latlng: [35.68617834, 139.69082085]
}, function(err, response) {
  if (!err) {
    var data = response.json.results[0].formatted_address;
    console.log(data)
    for (var i = 0; i < data.results.length; i++) {
      // console.log(data.results[i].formatted_address);
    }
    // console.log(JSON.parse(response.body).results);
  }
});

//coordinates_to_address(35.6573965 , 139.74830925);
function coordinates_to_address(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);

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
