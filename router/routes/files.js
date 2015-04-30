var express = require('express')
    , router = express.Router()
    , logger = require('nlogger').logger(module)
    , path = require('path');

router.get('/:directory', function getFiles(req,res){
    return res.sendFile(path.join(__dirname, '../../' + req.params.directory, 'index.js'));
});

module.exports = router;