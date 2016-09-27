const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));
app.use(bodyParser.json());

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/api/regions', require('./routes/regions.js'));
app.use('/api/salesPeople', require('./routes/salesPeople.js'));
app.use('/api/assignments', require('./routes/assignments.js'));

module.exports = app;