var express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/db', { useNewUrlParser: true, useUnifiedTopology: true });

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
   // we're connected!
   console.log('Connected to mongo db');
});

var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});
var Person = mongoose.model("Person", personSchema, 'Person');

app.get('/person', function (req, res) {
   res.render('person');
});

app.post('/person', function (req, res) {
   var personInfo = req.body; //Get the parsed information

   if (!personInfo.name || !personInfo.age || !personInfo.nationality) {
      res.render('show_message', {
         message: "Sorry, you provided worng info", type: "error"
      });
   } else {
      var newPerson = new Person({
         name: personInfo.name,
         age: personInfo.age,
         nationality: personInfo.nationality
      });

      newPerson.save(function (err, Person) {
         if (err)
            res.render('show_message', { message: "Database error", type: "error" });
         else
            res.render('show_message', {
               message: "New person added", type: "success", person: personInfo
            });
      });
   }
});


//First middleware before response is sent
app.use(function (req, res, next) {
   console.log(Date.now());
   next();
});

//Route handler
app.get('/', function (req, res, next) {
   // console.log("Middle" + Date.now());
   res.send('hello world');
   next();
});

app.use('/', function (req, res) {
   console.log(Date.now());
});

app.listen(3000);