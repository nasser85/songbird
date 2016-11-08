var Express = require('express');
var path = require('path');
var indexPath = path.join(__dirname, './index.html');
var publicPath = path.join(__dirname, './public');
var apiPath = path.join(__dirname, './api.js');
var bodyParser = require('body-parser');
var lyricist = require('lyricist')('y6VxCEfzLIGleplTUmkM3_Xgpv5sb6aHk1iH7d7wzEwGuQBfK-9Ai9M6EhaS7EJG');

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

console.log(lyricist);
lyricist.song(1, function (err, song) {
	if (err) {
		console.log(err)
	} else {
		  console.log(song.lyrics);
	}

});