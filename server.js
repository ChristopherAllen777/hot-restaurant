// Dependencies
// =============================================================
var tableArray = require('./tableData.js');
var waitlistArray = require('./waitinglistData.js');
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
// =============================================================

// Front-End HTML Pages Routing GET Requests
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  res.json(tableArray);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitlistArray);
});

// Front-End HTML Pages Routing POST Requests - Create JSON

app.post("/api/tables", function(req, res) {
  var newtable = req.body;
  //newtable = newtable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newtable);

  characters.push(newcharacter);

  res.json(newcharacter);
});

app.post("/api/waitlist", function(req, res) {
  var viewwaitlist = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});