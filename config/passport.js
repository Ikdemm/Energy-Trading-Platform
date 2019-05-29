const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = mongoose.model("User");

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]"
    },
    (email, password, done) => {
      User.findOne({ email })
        .then(user => {
          // Return if user not found in database
          if (!user) {
            return done(null, false, {
              message: "User not found"
            });
          }

          // Return if password is wrong
          if (!user.validatePassword(password)) {
            return done(null, false, {
              message: "Password is wrong"
            });
          }

          // If credentials are correct, return the user object
          return done(null, user);
        })
        .catch(done);
    }
  )
);
