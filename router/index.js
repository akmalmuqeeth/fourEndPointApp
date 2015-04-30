var passport = require('../auth'),
    logger = require('nlogger').logger(module)

module.exports = function (app) {
    app.use('/api/login', require('./routes/login'));
    app.use('/api/users', require('./routes/users'));
    app.use('/api/files', require('./routes/files'));
};