var path     = require('path');
var express  = require('express');
var webpack  = require('webpack');
var config   = require('./webpack.config.dev');

var app      = express();
var compiler = webpack(config);
var port     = process.env.PORT || 3000;


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, /* 'public',*/ 'index.html'));
});


app.listen(port, function(e) {
    if (e) {
        console.log(e);
        return;
    }

    console.log('Listening on port 3000');
});
