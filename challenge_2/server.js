const express = require('express');
const bodyParser = require('body-parser');
const createCSV = require('./client/app.js');


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  var result = createCSV(req.body.data);
  res.send(result);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(3000, () => {
  console.log("Server is running. Listening on port 3000");
});

