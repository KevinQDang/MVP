const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const items = require('../database-mysql');
// const items = require('../database-mongo');

const app = express();

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// UNCOMMENT FOR ANGULAR
app.use(express.static(path.join(__dirname, '/../angular-client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));
console.log('hello');
app.get('/items', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get('/search', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(200);
    } else {
      res.json(data);
    }
  });
});
app.post('/search', (req, res) => {
  // these item should not be the req.body
  // should be the recent videos in a list
  const item = req.body;
  const queryStr = 'INSERT into items(id, quantity, description) values (?, ?, ?)';
  // querystr is inserting data to the database table
  items.query(queryStr, item, (err, results) => {
    // should have a callback or promise here
    console.log(err, results);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000!');
});
