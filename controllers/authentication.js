var passport = require("passport");
var mongoose = require("mongoose");
var User = mongoose.model("User");

/*module.exports.register = function(req, res) {
  console.log(req.body);
  let user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.isProducer = req.body.isProducer;
  user.address = req.body.address;
  user.country = req.body.country;
  user.rating = req.body.rating;
  user.setPassword(req.body.password);

  user.save(function(err) {
    var token;
    token = user.generateJWT();
    res.status(200);
    res.json({
      token: token
    });
  })(req, res);
};*/

module.exports.login = function(req, res) {
  passport.authenticate("local", function(err, user, info) {
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if (user) {
      token = user.generateJwt();
      res.status(200);
      res.json({
        token: token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);
};
