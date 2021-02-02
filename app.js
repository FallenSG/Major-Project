var express = require('express');
const bodyParser = require('body-parser');
const {Book,check,saver} = require('./models/book');
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

app.get('/', function(req, res){
    res.send('ok');
    var book = new Book({
        title: 'sample book',
        author: 'SG',
        summary: 'checking the models',
        isbn: '0000000',
        genre: 'Fantasy'
    });

    // console.log(book);  
    check(book);
    saver
});

app.listen(3000, function(){
    console.log('listening');
});