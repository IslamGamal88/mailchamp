const mongoose = require("mongoose");
const { mongoURI } = require("../config/keys");
const User = require("./User");

mongoose.Promise = Promise;
mongoose.set("debug", true);
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports.User = User;
