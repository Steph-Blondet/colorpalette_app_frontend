var express = require('express');
var app     = express();
// var port    = 3001 || process.env.PORT;

app.use(express.static('public'));

// app.listen(port, function() {
//   console.log("ColorPalette Frontend running on port: ", port);
// });

app.listen(process.env.PORT || 3001)
