const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost/moviequizz');

var HighscoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  score:  { type: Number, required: true },
  time:  { type: Number, required: true },
  createdAt: { type: Date, 'default': Date.now }
});

var Highscore = mongoose.model('Highscore', HighscoreSchema);

function getHighscores(cb) {
  var query = Highscore.find()
    .lean()
    .sort({ score: 'desc', time: 'asc'})
    .limit(5);

  query.exec(cb);
}

function addHighscore(attributes, cb) {
  var item = new Highscore(attributes);
  item.save(cb);
}

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded());
app.use(express.json());

app.get('/api/highscore', function(req, res) {
  getHighscores(function(err, items) {
    res.type('application/json');
    if (err) {
      res.jsonp(400, { error: err.message });
    } else {
      res.jsonp({ items: items });
    }
  });
});

app.post('/api/highscore', function(req, res) {
  addHighscore(req.body, function(err) {
    res.type('application/json');
    if (err) {
      res.send(500, { error: err.message || 'Undefined error' });
    } else {
      getHighscores(function(err, items) {
        res.type('application/json');
        if (err) {
          res.jsonp(400, { error: err.message });
        } else {
          res.jsonp({ items: items });
        }
      });
    }
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3001);
