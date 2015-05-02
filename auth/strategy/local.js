var logger = require('nlogger').logger(module)
    , db = require('../../db')
    , UserModel = db.model('User');

module.exports = function (username, password, done) {
    logger.info("username: ", username, " and password is ", password);

    UserModel.findOne({username : username}, function(err, user){
        if(err) {
            logger.debug("error finding user ", err);
            return done(err, null);
        }

        if(!user) return done(null,null, "user not found");
        if(user.password == password) { //authentication successful
            done(null, user);
        } else { // authentication failed
            done(null, null, 'password not matched');
        }
    });
}