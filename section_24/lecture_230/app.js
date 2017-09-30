var express = require("express");
var app = express();
var path = require("path");

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/views/home.html')); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Started listening on your server");
});