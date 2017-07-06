
function mapAPIApp(lat,lon){
  // console.log("HELOOOO" + lat + lon)
  googleMapsClient.reverseGeocode({
    latlng: [lat, lon]
  }, function(err, response) {
    // console.log(err);
    if (!err) {
      api_result = response.json.results[0].formatted_address;
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
