var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.listen(3124, function(){
  console.log("listening on 3124");
});