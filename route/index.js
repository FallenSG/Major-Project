var router = require('express').Router();

router.get('/', function(req, res){
    res.send('Got to home_page');
});

module.exports = router;