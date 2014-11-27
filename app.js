var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var assetManager = require('connect-assetmanager');

var routes = require('./routes/index');
var users = require('./routes/users');

var assetManagerGroups = {
    'js': {
        'route': /\/static\/js\/[0-9]+\/.*\.js/
        , 'path': './public/javascripts/'
        , 'dataType': 'javascript'
        , 'files': [
            'libs/jquery-1.11.1.min.js',
            'libs/bootstrap-3.3.1.min.js',
            'libs/typeahead.jquery-0.10.5.js',
            'libs/handlebars-2.0.0.js',
            'search-suggest.jquery.js'
        ]
    }
};

var assetsManagerMiddleware = assetManager(assetManagerGroups);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(assetsManagerMiddleware);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
