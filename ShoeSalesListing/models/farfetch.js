var mongoose = require('mongoose');

//Set the schema for the shoe data
var farfetch = new mongoose.Schema({
    Brand: String,
    Description: String,
    OriginalPrice: String,
    SalePrice: String
}, {collection: 'farfetch'});

var farfetchs = mongoose.model('farfetch',farfetch);

//Get shoes
module.exports = farfetch = mongoose.model('shoe', farfetch);
