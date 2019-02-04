var app = express();
var express = require("express");
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/api/friends"));
  });

  app.post('/', function (req, res) {
    res.send('/api/friends')
  })