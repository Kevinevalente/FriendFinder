// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// =============================================================
// Sets up the Express App
// =============================================================


var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// =============================================================
// DATA
// =============================================================

// User (constructor?)
// - name
// - Photo Link

// Survey Answers
// - array of reservations?

const friend = function(name,photo) {
	this.name = name;
	this.photo = photo;
}

const answers = [];
// =============================================================
// ROUTES
// =============================================================

// basic route to home page (home.html) (GET)
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// route to view survey (survey.html) (GET)
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

// =============================================================
// API
// =============================================================

// api route to view survey answers (GET)
app.get("/api/survey", function(req, res) {
  res.json(survey);// Displays tables array in JSON Format
});
// api route to make new reservation (POST)

app.post("/api/new", function(req, res) {
  var dateAnswers = req.body; //req.body references body parser npm package
  // newRes.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase(); 

 
// =============================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
