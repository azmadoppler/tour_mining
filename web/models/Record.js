var database = require('../dbconnection')
var Record = {
  getAllRecord: function(callback){
    database.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    return database.query("Select * from record" , callback)
  },
  getRecordFromLocation: function(from , callback){
    return database.query("SELECT * FROM record WHERE record_number IN (SELECT record_number FROM `record` WHERE prefecture_from = ?)",[from],callback)
  }
};
module.exports=Record;
