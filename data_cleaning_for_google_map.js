  module.exports = function(msg){
    var fs = require('fs');
    var array = fs.readFileSync('location_keyword.txt').toString().split("\r\n");
    var unique = array.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    })
    unique.pop();
    // var replace = "Japan, 〒150-0001 Tōkyō-to, Shibuya-ku, Jingūmae, 1 Chome−１４−２９";
    var replace = msg;
    var result = "No Location Match";
    for(k in unique){
      var rexEx = new RegExp(unique[k],"i");
      if(replace.search(rexEx)>=0){
        result = unique[k];
      }
      // if(unique[k].search(rexEx)>=0)

    }
    // console.log(unique);
    return result;
}
function talk(){

  console.log("eyyyy");
}
function compareWIthRecEx(){

}

function escapeRegExp(string){ return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"); }
