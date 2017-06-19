  var fs = require('fs');

  //Reach Data from txt and remove dupplicate

  // module.exports = function (){
  var array = fs.readFileSync('all_user_geo.txt').toString().split("\n");
  var unique = array.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
  })
  unique.pop();

  console.log("eyyyy");

  var array = fs.readFileSync('location_keyword.txt').toString().split("\n");
  var unique = array.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
  });

  console.log();


  function greet(){
    console.log("Hello")
  }
// }
