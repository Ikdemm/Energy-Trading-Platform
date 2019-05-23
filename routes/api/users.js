const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const User = mongoose.model("User");

//GET users
router.route("/").get(function(req, res) {
  User.find(function(err, users) {
    res.json(users);
  });
});

//POST new user route (optional, everyone has access)
//routes.post('/', () => res.status(200).send('blub'))
router.post("/", auth.optional, function(req, res, next) {
  let user = req.body.user;

  if (!user.email) {
    res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  } else if (!user.password) {
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
//router.post("/login", auth.optional, function(req, res, next) {
router.post("/login", function(req, res, next) {
  let user = req.body.user;
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
        const user = passportUser;
        user.token = passportUser.generateJWT();

        return res.json({ user: user.toAuthJSON() });
      }

      return status(400).info;
    }
  )(req, res, next);
});

//GET current route (required, only authenticated user have access)
router.get("/current", auth.required, async function(req, res, next) {
  let id = req.payload.id;

  const user = await User.findById(id);
  if (!user) {
    console.log("no user found");
    return res.sendStatus(400);
  }
  console.log("user found");
  return res.json({ user: user.toAuthJSON() });
});

module.exports = router;
