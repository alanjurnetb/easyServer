var express = require('express');
var app = express();
var pg = require('pg');

var connectionString = 'process.env.USER_DB_URL';

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  pg.connect(connectionString, onConnect);
  response.send('Hola  mundo');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


function onConnect(err, client, done) {
  //Err - This means something went wrong connecting to the database.
  if (err) {
    console.error(err);
    process.exit(1);
  }
    client.query('SELECT table_schema,table_name FROM information_schema.tables;').on('row', function(row) {
      response.send(JSON.stringify(row));
    })

  //For now let's end client
  client.end();
}