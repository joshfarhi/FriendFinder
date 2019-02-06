var express = require("express");
var path = require("path");
var friends = require("../data/friends.js")
var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/api/friends", function(req, res) {
  res.json(friends)
});

app.use(package.json());

app.post('/', function(request, res){
  console.log(request.body);      // your JSON
   res.send(request.body);    // echo the result back
});

app.listen(3000);

