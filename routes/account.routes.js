const express = require("express");
const accountRoutes = express.Router();

// Require Account model in our routes module
let Account = require("../models/Account.js");
let accountDao = require("../dao/accountDao.js");

// Defined store route
accountRoutes.post("/add", async (req, res) => {
  account = await accountDao.save(req.body);
  console.log(account);
  res.send(account);
});

// Defined get data(index or listing) route
accountRoutes.route("/").get(function(req, res) {
  Account.find(function(err, accounts) {
    if (err) {
      console.log(err);
    } else {
      res.json(accounts);
    }
  });
});

// Defined edit route
accountRoutes.route("/find/:id").get(function(req, res) {
  let id = req.params.id;
  Account.findById(id, function(err, account) {
    res.json(account);
  });
});

//  Defined update route
accountRoutes.post("/update", async (req, res) => {
  console.log(req.body);
  let test = await accountDao.update(req.body, req.body._id);
  console.log(test);
  res.send(true);
});

// Defined delete | remove | destroy route
accountRoutes.route("/delete/:id").get(function(req, res) {
  Account.findByIdAndRemove({ _id: req.params.id }, function(err, account) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = accountRoutes;
