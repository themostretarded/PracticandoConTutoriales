var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/Proyecto");

var user_schema = new Schema({
    name:String,
    username:String,
    password:String,
    age:Number,
    email:String,
    date_birth:Date
});

var User = mongoose.model("User",user_schema);

module.exports.User = User;