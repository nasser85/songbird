var router = require('express').Router();
var lyricist = require('lyricist')('y6VxCEfzLIGleplTUmkM3_Xgpv5sb6aHk1iH7d7wzEwGuQBfK-9Ai9M6EhaS7EJG');

module.exports = router;

router.post('/', function(req, res, next) {
	console.log(req.body)
	lyricist.song(req.body, function (err, song) {
		if (err) {
			res.send("Search yielded no results.  Please Try again");
		} else {
			res.send(song);
		}
	  
	});

});



