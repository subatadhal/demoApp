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

var express = require('express')
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
