var express = require('express')
    , router = express.Router()
    , logger = require('nlogger').logger(module)
    , mongoose = require('mongoose')
    , conn = require('../../db')
    , states = {0 : 'disconnected', 1 : 'connected', 2 : 'connecting', 3 : 'disconnecting'};

router.get('', function status(req,res){
    return res.send({"mongoDB" : states[conn.readyState]});
});

module.exports = router;