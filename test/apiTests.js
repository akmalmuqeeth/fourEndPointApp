var request = require('supertest')
    , https = require('https')
    , fs = require('fs')
    , path = require('path')
    , should = require('should')
    , express = require('express')
    , router = require('../router');

describe('status(url)', function() {
    it('should return the status of the application', function (done) {
        var app = express();
        router(app);

        var s = app.listen(function () {
            var url = 'http://localhost:' + s.address().port + "/api/status";
            request(url)
                .get('/')
                .expect('{"mongoDB":"connecting"}', done);
        });
    })
});

describe('files(url)', function() {
    it('should return a status of 200 when fetching files', function (done) {
        var app = express();
        router(app);

        var s = app.listen(function () {
            var url = 'http://localhost:' + s.address().port + "/api/files/middlewares";
            request(url)
                .get('/')
                .expect(200, function() { done(); });
        });
    })
});