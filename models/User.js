const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String
    },
    email: String,
    hash: String,
    salt: String,
    isProducer: Boolean,
    address: {
      type: String,
      unique: true
    },
    token: String,
    state: String,
    rating: Number,
    governorate: String
  },
  {
    collection: "users"
  }
);

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

UserSchema.methods.validatePassword = function(password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      exp: parseInt(expiry.getTime() / 1000, 10)
    },
    "secret"
  );
};

UserSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT()
  };
};

UserSchema.methods.setAddress = function(address) {
  this.address = address;
};

module.exports = mongoose.model("User", UserSchema);
