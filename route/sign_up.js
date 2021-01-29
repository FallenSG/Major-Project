var router = require('express').Router();

router.get('/', function(req, res){
    res.render('sign_up');
});

router.post('/', function(req, res){
    res.send(req.body);
    // var personInfo = req.body;

    // if(!personInfo.id || !personInfo.password){
    //     res.send('error!!!  empty field');
    // }
    // else{
    //     var newPerson = new Person({
    //         name: personInfo.id,
    //         pass: personInfo.password
    //     });

    //     newPerson.save(function(err, Person){
    //         if(err)  
    //             res.send('error.. during db');
    //         else
    //             res.send('saved');
    //     });
    // }
});

module.exports = router;