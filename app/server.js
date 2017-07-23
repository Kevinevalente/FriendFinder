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
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// require('./app/routing/htmlRoutes.js')(app);

// =============================================================
// HTML ROUTES
// =============================================================
app.use( function(req, res) {
	  res.sendFile(path.join(__dirname, "/public/home.html"));
	});

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/public/survey.html'))
	});

// =============================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);

});