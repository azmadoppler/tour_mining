  module.exports = function(){
    var fs = require('fs');
    var array = fs.readFileSync('location_keyword.txt').toString().split("\n");
    var unique = array.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    })
    unique.pop();
    for(k in unique){
      console.log(k+unique[k])
    }

}
function talk(){

  console.log("eyyyy");
}
