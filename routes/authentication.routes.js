var express = require("express");
var router = express.Router();
var jwt = require("express-jwt");
var auth = jwt({
  secret: "secret",
  userProperty: "payload"
});

var userDao = require("../dao/userDao");
const mongoose = require("mongoose");

ObjectId = mongoose.Types.ObjectId;

var ctrlProfile = require("../controllers/profile");
var ctrlAuth = require("../controllers/authentication");

let User = require("../models/User");

// profile
router.get("/profile", auth, ctrlProfile.profileRead);

// authentication
// router.post("/register", ctrlAuth.register);

/*gadgetRoutes.post("/add", async (req, res) => {
  gadget = await gadgetDao.save(req.body);
  console.log(gadget);
  res.send(gadget);
});*/

router.post("/register", (req, res) => {
  console.log("I'm here");
  let user = new User();
  console.log(user);
  user._id = new ObjectId();
  user.username = req.body.username;
  user.email = req.body.email;
  user.isProducer = req.body.isProducer;
  user.address = req.body.address;
  user.country = req.body.country;
  user.rating = req.body.rating;
  user.setPassword(req.body.password);

  console.log(user);

  //final = await userDao.save(req.body);
  user.save(function(err, result) {
    if (err) res.send({ message: err });
    if (result) {
      console.log(result);
      var token;
      token = user.generateJWT();
      res.status(200);
      res.json({
        token: token
      });
    }
  });
});

//router.post("/register", ctrlAuth.register);

router.post("/login", ctrlAuth.login);

module.exports = router;
