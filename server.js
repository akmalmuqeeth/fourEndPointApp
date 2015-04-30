var express = require('express')
    , app = express()
    , logger = require('nlogger').logger(module)
    , conn = require('./db');

require('./middlewares')(app,conn);
require('./router')(app);

conn.on('error', function(err) {
    logger.error('Error connecting to the database: ', err)
});
conn.once('open', function callback () {
    logger.info("Connected to userDB database" );
    app.listen(8080, function() {
        logger.info('Server started');
    });
});