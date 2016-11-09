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
app.listen(3001, function() {
	console.log("Server is up on port 3001!")
});
