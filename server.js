const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  config = require("./DB"),
  passport = require("passport"),
  errorHandler = require("errorhandler");

var http = require("http");

var server = http.createServer(function(req, res) {
  res.end("test");
});

server.on("listening", function() {
  console.log("ok, server is running");
});

//const gadgetRoute = require("./routes/gadget.routes");
/*const panelRoute = require("./routes/panel.routes");
const accountRoute = require("./routes/account.routes");*/

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

//Middleware
require("./models/User");
require("./config/passport");
app.use(require("./routes"));

//Use Routes
app.use("/panels", panelRoute);
app.use("/gadgets", gadgetRoute);
app.use("/accounts", accountRoute);

// error handlers
if (!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err
      }
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  });
});

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

server = app.listen(port, function() {
  console.log("Listening on port " + port);
  console.log("Version " + version);
});
