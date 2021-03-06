const express = require("express");
const port = process.env.PORT || 5000;
const db = require("./models");
const passportConfig = require("./services/passportConfig");
const passport = require("passport");
const cookieSession = require("cookie-session");
const authRoutes = require("./routes/authRoutes");
const { cookieKeys } = require("./config/keys");
const app = express();

app.use(
  cookieSession({
    maxAge: 5000,
    keys: [cookieKeys]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

app.get("/", (req, res) => {
  res.send("hi there");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
