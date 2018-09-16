const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const farfetch = require('./models/farfetch');
const shoes = require('./routes/API/shoedata');

const web = express();
web.use(bodyParser.json());

mongoose.connect('mongodb://localhost/shoeData', {useNewUrlParser: true})
        .then(() => console.log('Connecting to server...')).catch(err => console.log(err));

web.use('/API/shoedata', shoes);

web.listen(8100);
