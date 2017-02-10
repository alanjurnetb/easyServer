var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  response.send('Hola  mundo');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


var pg = require('pg');

pg.defaults.ssl = true;
pg.connect(process.env.USERS_DB_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT * FROM employees;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});

