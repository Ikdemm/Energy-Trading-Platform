const express = require("express");
const panelRoutes = express.Router();

// Require Panel model in our routes module
let Panel = require("../models/Panel");

let panelDao = require("../dao/panelDao");

// Defined store route
panelRoutes.route("/add").post(function(req, res) {
  /*save: function (body, model) {
        let objectModel = new model(body);
        objectModel._id = new ObjectId();
        return objectModel.save();
    }*/
  console.log("req body" + JSON.stringify(req.body));
  let panel = new Panel(req.body);
  panel
    .save()
    .then(panel => {
      res.status(200).json(req.body);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
panelRoutes.route("/").get(function(req, res) {
  Panel.find(function(err, panels) {
    if (err) {
      console.log(err);
    } else {
      res.json(panels);
    }
  });
});

// Defined edit route
panelRoutes.route("/find/:id").get(function(req, res) {
  let id = req.params.id;
  Panel.findById(id, function(err, panel) {
    res.json(panel);
  });
});

panelRoutes.route("/update").post(async function(req, res) {
  console.log(req.body);
  let test = await panelDao.update(req.body, req.body._id);
  console.log(test);

  res.send(true);
});

/*  Defined update route
  panelRoutes.route('/update/:id').post(function (req, res) {
      Panel.findById(req.params.id, function(err, panel) {
      if (!panel)
        return next(new Error('Could not load Document'));
      else {
          panel.number = req.body.number;
          panel.manufacturer = req.body.manufacturer;
          panel.cellsNumber = req.body.cellsNumber;
          panel.STCOutput = req.body.STCOutput;
          panel.state = req.body.state;
  
          panel.save().then(panel => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });*/

// Defined delete | remove | destroy route
panelRoutes.route("/delete/:id").get(function(req, res) {
  Panel.findByIdAndRemove({ _id: req.params.id }, function(err, panel) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = panelRoutes;
