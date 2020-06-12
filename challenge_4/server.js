const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'client/dist')));

app.use(bodyParser.urlencoded( {extended : true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.post('/', (req, res) => {
  res.send('Working...')
})
app.listen(port, () => {
  console.log(`Server is up and listening of port ${port}...`);
});

