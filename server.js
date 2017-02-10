var express = require('express');
var app     = express();
var port    = 3001 || process.env.PORT;

app.use(express.static('public'));

app.listen(3001, function() {
  console.log("ColorPalette Frontend running on port: ", port);
});
