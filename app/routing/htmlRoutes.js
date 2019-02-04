var app = express();
var express = require("express");
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

  app.get("/", function (req, res, next) {
    fs.readFile("home.html", function (err, data) {
      if (err) {
        next(err); // Pass errors to Express.
      }
      else {
        res.send(data);
      }
    });
  });