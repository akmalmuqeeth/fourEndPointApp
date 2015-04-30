var mongoose = require('mongoose')
    , logger = require('nlogger').logger(module)
    , userSchema = mongoose.Schema(
    {
        username : String,
        name: String,
        password: String,
        city: String,
        profession: String
    });

module.exports = userSchema;