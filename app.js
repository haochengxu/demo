var express = require('express');
var app = express();
var path = require('path');
var count = 0;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
app.get('/count',function (req, res){
  count++;
  console.log(count);
});

app.get("/",function(req,res) {
  res.render('index');
});

module.exports = app;

