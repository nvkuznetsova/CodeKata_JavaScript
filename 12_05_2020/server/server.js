const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 8080;

app.use(morgan('combined'));
let allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

const names = ['Vanya', 'Vasya', 'Andrey', 'Egor', 'Sasha'];

app.get('/', (req, res) => res.json({ message: 'Welcome to our Poststore!' }));

app.route('/names').get(getNames).put(addName);

app.route('/names/:name').delete(deleteName).post(editName);

app.listen(port);
console.log('Listening on port ' + port);

function getNames(req, res) {
  res.json(names);
}

function addName(req, res) {
  const body = JSON.parse(req.body);
  names.push(body.name);
  res.json({ message: `${body.name} is added!`, dbState: names });
}

function deleteName(req, res) {
  const name = req.params.name;
  if (names.includes(name)) {
    names.splice(names.indexOf(name), 1);
    res.json({ message: `${name} is deleted!`, dbState: names });
  } else {
    res.status(404).send(`${name} doesn't exist!`);
  }
}

function editName(req, res) {
  const name = req.params.name;
  const newName = req.body.newName;
  console.log(newName);
  if (names.includes(name)) {
    names[names.indexOf(name)] = newName;
    res.json({ message: `${name} is edited!`, dbState: names });
  } else {
    res.json({ message: `${name} doesn't exist!` });
  }
}

module.exports = app;
