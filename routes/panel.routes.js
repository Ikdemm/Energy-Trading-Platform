const express = require("express");
const panelRoutes = express.Router();

// Require Panel model in our routes module
let Panel = require("../models/Panel");

let panelDao = require("../dao/panelDao");

// Defined store route
panelRoutes.post("/add", async (req, res) => {
  panel = await panelDao.save(req.body);
  console.log(req.body);
  res.send(req.body);
});

// Defined get data(index or listing) route
panelRoutes.route("/").get(function(req, res) {
  Panel.find(function(err, panels) {
    res.json(panels);
  });
});

// Defined edit route
panelRoutes.route("/find/:id").get(function(req, res) {
  let id = req.params.id;
  Panel.findById(id, function(err, panel) {
    res.json(panel);
  });
});

panelRoutes.post("/update", async (req, res) => {
  console.log(req.body);
  let test = await panelDao.update(req.body, req.body.id);
  console.log(test);
  res.send(true);
});

// Defined delete | remove | destroy route
panelRoutes.route("/delete/:id").get(function(req, res) {
  Panel.findByIdAndRemove({ _id: req.params.id }, function(err, panel) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = panelRoutes;
