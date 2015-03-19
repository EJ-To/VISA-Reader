var router = require("express").Router();

router.post("/", function (req, res) {
	console.log("hit server");
	console.log(req.files, req.body);

	res.redirect("/");

});

module.exports = router;
