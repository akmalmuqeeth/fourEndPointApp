var express = require('express')
    , router = express.Router()
    , logger = require('nlogger').logger(module)
    , user = require('../../../db').model('User');

router.get('/:cityFilter', function getUsers(req,res){
    user.aggregate()
        .match( { city : req.params.cityFilter} )
        .group({_id : "$profession",count: { $sum: 1 }})
        .exec(function (err, response) {
            if (err) console.log(err);
            res.json({"message": "success", "data": response,
                "status_code": "200"});
        }
    );
});

module.exports = router;