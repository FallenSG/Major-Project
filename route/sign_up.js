var router = require('express').Router();

router.get('/', function(req, res){
    res.send('Got to sign_up');
});

module.exports = router;