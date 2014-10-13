var mongoose = require("mongoose");

var url = "mongodb://localhost:27017/wdpress";
var db = mongoose.connect(url);
db.connection.on("connected", function(){
  console.log("MongoDB connected.");
});
