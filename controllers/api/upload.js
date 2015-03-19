var router = require("express").Router();
var fs = require("fs");
var csv = require("fast-csv");

router.post("/", function (req, res) {
	// console.log("hit server");
	// console.log(req.files.csvInput.path);

	var stream = fs.createReadStream(req.files.csvInput.path);

	var csvStream = csv()
	    .on("data", function(data){
	         console.log(data);
	    })
	    .on("end", function(){
	         console.log("done");
	    });

	stream.pipe(csvStream);

	res.redirect("/");

});

module.exports = router;
