const express = require('express');
const gadgetRoutes = express.Router();

// Require Gadget model in our routes module
let Gadget = require('../models/Gadget');

// Defined store route
gadgetRoutes.route('/add').post(function (req, res) {

    /*save: function (body, model) {
        let objectModel = new model(body);
        objectModel._id = new ObjectId();
        return objectModel.save();
    }*/
      console.log('req body'+ JSON.stringify(req.body));
    let gadget = new Gadget(req.body);
    gadget.save()
      .then(gadget => {
        res.status(200).json(req.body);
      })
      .catch(err => {
        
      res.status(400).send("unable to save to database");
      });
  });

// Defined get data(index or listing) route
gadgetRoutes.route('/').get(function (req, res) {
    
    Gadget.find(function (err, gadgets){
    if(err){
      console.log(err);
    }
    else {
      res.json(gadgets);
    }
  });
});

// Defined edit route
gadgetRoutes.route('/find/:id').get(function (req, res) {
    let id = req.params.id;
    Gadget.findById(id, function (err, gadget){
        res.json(gadget);
    });
  });
  
  //  Defined update route
  gadgetRoutes.route('/update/:id').post(function (req, res) {
      Gadget.findById(req.params.id, function(err, gadget) {
      if (!gadget)
        return next(new Error('Could not load Document'));
      else {
          gadget.name = req.body.name;
          gadget.type = req.body.type;
          gadget.watt = req.body.watt;
          gadget.state = req.body.state;
  
          gadget.save().then(gadget => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });
  
  // Defined delete | remove | destroy route
  gadgetRoutes.route('/delete/:id').get(function (req, res) {
      Gadget.findByIdAndRemove({_id: req.params.id}, function(err, gadget){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });

module.exports = gadgetRoutes;