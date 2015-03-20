var router = require("express").Router();
var fs = require("fs");
var csv = require("fast-csv");

router.post("/", function (req, res) {
	// console.log("hit server");
	// console.log(req.files.csvInput.path);

	// TODO: move to seperate module.
	var stream = fs.createReadStream(req.files.csvInput.path);
	var x = 0;
	var csvStream = csv()
		.validate(function(data){
			// func ran for every row before .on("data") triggered
			console.log("validating: " + data);
			return true;
		})
		.on("data-invalid", function(data){
			// if validate fails, what to do with that row.
		})
	    .on("data", function(data){
	        // console.log('#' + x + ' ' + data);
			// x++;
	    })
	    .on("end", function(){
	         console.log("done parsing");
	    });

	stream.pipe(csvStream);

	res.redirect("/");

});

module.exports = router;
