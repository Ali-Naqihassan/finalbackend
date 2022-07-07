const mongoose = require("mongoose");

const usersModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image:{
    type:String,
  },
  identity: {
    type: String,
  },
  tittle:{
    type:String
  },
  discription:{
    type:String
  },
  detail:{
    type:String
  },
  rating:{
    type:String
  },
  reviews:{
    type:String
  },
  longnitude:{
    type:Number
  },
  lattitude:{
    type:Number
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("users", usersModel);
