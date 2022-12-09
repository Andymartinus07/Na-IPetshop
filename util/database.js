 const mongodb = require("mongodb");srv
 const MongoClient = mongodb.MongoClient;
 let _db;

 const mongoConnect = (callback) => {
   MongoClient.connect(
     "mongodb+srv:andiparhusip27:FYCPX4g1iUGAepCd@cluster0.hgprfoh.mongodb.net/test",
     { useUnifiedTopology: true }
   )
     .then((client) => {
       console.log("Connected to MongoDB");
       _db = client.db();
       callback();
     })
     .catch((err) => {
       console.log(err);
       throw err;
     });
 };

 const getDb = () => {
   if (_db) {
     return _db;
   }
   throw "No database found";
 };

 module.exports = {
   mongoConnect,
   getDb,
 };