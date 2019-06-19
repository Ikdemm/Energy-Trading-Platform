const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

//POST new user route (optional, everyone has access)
router.post("/", auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req;

  console.log(user);

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  const finalUser = new User(user);

  finalUser.setPassword(user.password);

  return finalUser
    .save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

//POST login route (optional, everyone has access)
router.post("/login", auth.optional, (req, res, next) => {
  user = req.body;
  console.log(user);
  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  return passport.authenticate(
    "local",
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        return next(err);
      }

      if (passportUser) {
        console.log(passportUser);
        const user = passportUser;
        user.token = passportUser.generateJWT();
        console.log(user.token);
        return res.json({ user: user.toAuthJSON() });
      }

      return status(400).info;
    }
  )(req, res, next);
});

//GET current route (required, only authenticated User have access)
router.get("/current", auth.required, (req, res, next) => {
  const id = req.payload._id;
  console.log(req.payload);
  return User.findById(id).then(user => {
    if (!user) {
      return res.sendStatus(400);
    }
    return res.json({ user });
  });
});

module.exports = router;