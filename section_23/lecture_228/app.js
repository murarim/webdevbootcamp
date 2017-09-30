var express = require("express");
var app = express();

app.get('/', function(req, res) {
    res.send("This is the home page for the app");
});

app.get('/speak/:animal', function(req, res) {
    var sound = '';
   switch (req.params.animal) {
       case 'pig':
           sound = "Moo";
           break;
           
       case 'cow':
           sound = 'Moo'
           break;
           
        case 'dog':
            sound = "Woof Woof!";
            break;
       
       default:
            break;
   }
   res.send("The " + req.params.animal + " says '" + sound + "'");
});

app.get('/repeat/:string/:count', function(req, res) {
    var resultString = "";
   for (var i = 0; i < req.params.count; i++)  {
       resultString += req.params.string + " ";
   }
   res.send(resultString);
});

app.get('*', function(req, res) {
    res.send("You should not be here");
})

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Successfully running app");
});