const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  config = require("./DB"),
  errorHandler = require("errorhandler"),
  passport = require("passport");

const gadgetRoute = require("./routes/gadget.routes");
const panelRoute = require("./routes/panel.routes");
const accountRoute = require("./routes/account.routes");
const authRoute = require("./routes/authentication.routes");

//Configure mongoose's promise to global promise
mongoose.Promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === "production";

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(require("morgan")("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../dist/energy")));

if (!isProduction) {
  app.use(errorHandler());
}

//Configure Mongoose
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Cannot connect to the database" + err);
  }
);

// Initializing our Middleware
app.use(passport.initialize());
app.use("/api", authRoute);

// Use Routes
app.use("/panels", panelRoute);
app.use("/gadgets", gadgetRoute);
app.use("/accounts", accountRoute);

// error handlers
// Catch unauthorised errors
app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401);
    res.json({ message: err.name + ": " + err.message });
  }
});

app.get("/getversion", function(req, res) {
  console.log("Version " + version);
  res.status(200).json({ version: version });
});

var version = process.env.version || "1.0";

const port = process.env.PORT || 4000;

const server = app.listen(port, function() {
  console.log("Listening on port " + port);
  console.log("Version " + version);
});
