  module.exports = function(msg){
    var fs = require('fs');
    var array = fs.readFileSync('location_keyword.txt').toString().split("\n");
    var unique = array.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    })
    unique.pop();
    let test = "Yamaguchi";
    for(k in unique){
      if(unique[k].includes(test))
      {
        console.log("DEKITAAAAAAAAAAAAAAAAAAAAAAA");
      }
    }
    return unique;
}
function talk(){

  console.log("eyyyy");
}
