const express = require("express");
const userRoutes = express.Router();

// Require Account model in our routes module
let User = require("../models/User.js");
let userDao = require("../dao/userDao.js");

// Defined get data(index or listing) route
userRoutes.route("/").get(function(req, res) {
    User.find(function(err, users) {
      if (err) {
        console.log(err);
      } else {
        res.json(users);
      }
    });
  });

userRoutes.route("/:id").get(function(req, res) {
    if (err) {
        console.log(err);
      } else {
        let id = req.body.id;
        let user = User.findById(id);
        res.json(user);
      }
});

module.exports = userRoutes;