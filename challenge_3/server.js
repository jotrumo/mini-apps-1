const express = require('express');
const mysql = require('mysql');
const port = 3000;

var app = express();

//Database setup-----------------------------------------

var db = mysql.createConnection({
  user: 'root',
  password: 'password'
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("MySQL is running...");
  }
});

//Routes-------------------------------------------------

app.get('/', (req, res) => {
  res.send('GET Req is working...')
});

app.post('/', (req, res) => {
  res.send("POST Req is working...")
})

//-------------------------------------------------------

app.listen(port, () => {
  console.log('Server is up and listening on port 3000');
});