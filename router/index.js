var passport = require('../auth'),
    logger = require('nlogger').logger(module)

module.exports = function (app) {
    app.use('/api/login', require('./routes/login'));
};