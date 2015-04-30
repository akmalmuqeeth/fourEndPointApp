var mongoose = require('mongoose')
    , conn = mongoose.createConnection('mongodb://localhost/userDB');

conn.model('User', require('./schemas/user'));

module.exports = conn;