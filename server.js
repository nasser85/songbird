var Express = require('express');
var path = require('path');
var indexPath = path.join(__dirname, './index.html');
var publicPath = path.join(__dirname, './public');
var apiPath = path.join(__dirname, './api.js');
var bodyParser = require('body-parser');

var app = Express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static(publicPath))

app.use('/api', require(apiPath));

app.use('/*', function(req, res) {
	res.sendFile(indexPath)
});

var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log('Server started on port 3001');
});
