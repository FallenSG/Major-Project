var router = require('express').Router();

var sign_up = require('./sign_up');
var sign_in = require('./sign_in');

router.get('/', function(req, res){
    res.send('Got to home_page');
});

router.use('/sign_up', sign_up);
router.use('/sign_in', sign_in);

module.exports = router;

