var express = require('express')
    , router = express.Router()
    , passport = require('../../auth')
    , logger = require('nlogger').logger(module)

router.post('/', function login (req,res) {
    logger.info("attempting to authenticate user", req.body);
    passport.authenticate('local', function(err, user, info) {
        if (err)
            return res.status(500).end();
        if (!user)
            return res.status(404).send(info);

        /* user is authenticated at this point but a cookie is not created,
         the login method in the request object serializes the user
         and creates the cookie */
        req.logIn(user, function(err) {
            if (err) {
                return res.status(500).end();
            }

            return res.send({user : {name: user.name, city : user.city, profession : user.profession}});
        });
    })(req, res);
});

module.exports = router;