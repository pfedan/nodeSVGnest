var express = require('express');
var app = express();
var args = process.argv.slice(2);
var port;

console.log(args);

if (args[0]) {
  port = args[0]
} else {
  port = 3000
}

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('nodeSVGnest websever listening on port ' + port + '!');
});