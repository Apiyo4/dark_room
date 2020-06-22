const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Photo Schema
let photoSchema = new Schema({
    name: String,
    path: String,
    size: Number,
    date: {type: Date, default: Date()}
})

let Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;