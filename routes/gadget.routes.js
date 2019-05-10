const express = require("express");
const gadgetRoutes = express.Router();

// Require Gadget model in our routes module
let Gadget = require("../models/Gadget.js");

let gadgetDao = require("../dao/gadgetDao.js");
// Defined store route
gadgetRoutes.post("/add", async (req, res) => {
  gadget = await gadgetDao.save(req.body);
  console.log(gadget);
  res.send(gadget);
});

// Defined get data(index or listing) route
gadgetRoutes.route("/").get(function(req, res) {
  Gadget.find(function(err, gadgets) {
    if (err) {
      console.log(err);
    } else {
      res.json(gadgets);
    }
  });
});

// Defined edit route
gadgetRoutes.route("/find/:id").get(function(req, res) {
  let id = req.params.id;
  Gadget.findById(id, function(err, gadget) {
    res.json(gadget);
  });
});

//  Defined update route
gadgetRoutes.post("/update", async (req, res) => {
  console.log(req.body);
  let test = await gadgetDao.update(req.body, req.body._id);
  console.log(test);
  res.send(true);
});

// Defined delete | remove | destroy route
gadgetRoutes.route("/delete/:id").get(function(req, res) {
  Gadget.findByIdAndRemove({ _id: req.params.id }, function(err, gadget) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = gadgetRoutes;
