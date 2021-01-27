var app = require('express')();

var index = require('./route/index.js');
var sign_in = require('./route/sign_in.js');
var sign_up = require('./route/sign_up.js');

app.use('/', index);
app.use('/sign_in', sign_in);
app.use('/sign_up', sign_up);

app.listen(3000);