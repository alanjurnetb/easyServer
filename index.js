var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.logger());


app.get('/', function(request, response) {
  response.send('Hola  mundo');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});