var router = require("express").Router();

router.get("/", function (req, res) {
	if (req.err){
		console.warn(err.message);
	}
	else {
		res.render('home', {
			title: 'Home'
		});
	}
});

module.exports = router;
