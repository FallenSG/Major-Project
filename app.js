var express = require('express');
const bodyParser = require('body-parser');
const {Book,check,saver} = require('./models/book');
const Author = require('./models/author');
var mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/sample', { useNewUrlParser: true, useUnifiedTopology: true });

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));

var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
   console.log('Connected to mongo db');
}).on('error', console.error.bind(console, 'Connection error:'));


var auth = new Author({
    name: 'SG',
    date_of_birth : '2002-12-09',
    book_id: 'sample',
    date_of_death: '2020-02-04'
});
auth.save();
console.log(auth.lifespan, auth.url);

app.get('/', function(req, res){
    res.send('ok');
});

app.listen(3000, function(){
    console.log('listening');
});