var app = require('express')();
const bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://mongodb:27017/sample', { useNewUrlParser: true, useUnifiedTopology: true });


app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//    // we're connected!
//    console.log('Connected to mongo db');
// });

// var personSchema = mongoose.Schema({
//    name: String,
//    pass: String
// });
// var Person = mongoose.model("Person", personSchema);

var routes = require('./route/index');

app.use('/', routes);

app.listen(3000, function(req, res){
    console.log('listening...')
});