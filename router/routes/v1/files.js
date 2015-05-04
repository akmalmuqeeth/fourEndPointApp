var express = require('express')
    , router = express.Router()
    , logger = require('nlogger').logger(module)
    , path = require('path')
    , fs = require('fs');

router.get('/:directory', function getFiles(req,res){
    var location = path.join(__dirname, '../../../' + req.params.directory);
    fs.readdir(location, function (err, files) {
        if (err) {
            logger.debug("error while reading directory " +location+ ". Error: "+  err);
            throw err;
        }
        return res.json({"path" : location, "files" : files});
    });
});

module.exports = router;