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
  // items.selectAll((err, data) => {
  //   if (err) {
  //     res.sendStatus(200);
  //   } else {
  //     res.json(data);
  //   }
  // });
});
// app.get('/api/activity/', (req, res) => {
//   items.selectAll((err, data) => {
//     if (err) {
//       res.sendStatus(200);
//     } else {
//       res.json(data);
//     }
//   });
// });
// app.post('/items', (req, res) => {
//   console.log(req.body);
// });

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000!');
});
