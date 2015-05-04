module.exports = function (app) {
    app.use('/api/login', require('./routes/v1/login'));
    app.use('/api/users', require('./routes/v1/users'));
    app.use('/api/files', require('./routes/v1/files'));
    app.use('/api/status', require('./routes/v1/status'));
};