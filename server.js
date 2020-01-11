// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var newReservation = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.post("/reserve", function(req, res) {
  var makeReservation = req.body;
  
});

// Temp data
const tables = [
  {
    tableNumber: 1,
    id: 1000,
    name: "Person",
    email: "person@place.com",
    phoneNumber: "5032334567"
  },
  {
    tableNumber: 2,
    id: 1050,
    name: "Person2",
    email: "person2@place.com",
    phoneNumber: "5032334567"
  }
];

const reservations = [
  {
    name: "Joe",
    phone: "2345671234",
    email: "joe@eat.com",
    uniqueId: 1234
  }
];

// API paths
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/reserve", function(req, res) {
  return res.json(reservations);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
