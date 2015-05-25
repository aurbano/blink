/**
 * This file configures and starts up a basic
 * Blink server used for testing.
 */

var blink = require('../lib/blink.js');

// Configure the application
var app = blink();

app.get('/', function (req, res) {
  res.send('Blink server is running');
});

// Start the server
var server = app.listen(3000);