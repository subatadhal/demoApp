
//https://expressjs.com/en/starter/hello-world.html
// var express = require('express')
// var app = express();
//
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
//
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })



//http://www.fullstacktraining.com/articles/how-to-serve-static-files-with-express
var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3001);

//app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/index.html'));
// });

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});


// var express = require('express');
//
// //Create our app
// var app = express();
//
// app.use(express.static('public'));
//
// app.listen(3000, function(){
//    console.log('Express server is up on port: 3000');
// });
