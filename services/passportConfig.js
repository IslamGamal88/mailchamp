const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const { clientID, clientSecret } = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let foundUser = await User.findOne({ googleId: profile.id });
        if (!foundUser) {
          let user = await User.create({ googleId: profile.id });
          done(null, user);
        } else {
          done(null, foundUser);
        }
      } catch (error) {
        if (error.code === 11000) {
          error.errmsg = "Sorry, that Username/Email is already taken";
        }
      }
    }
  )
);
