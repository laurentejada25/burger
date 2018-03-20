//Dependencies
var express = require("express");
var router = express.Router();

//Import the model to use its database functions
var burger = require("../models/burger.js");

router.get("/", function(req, res){
	//use redirect to send from one route to another
	res.redirect("/burgers");
});

//Create routes and set up logic within routes where required
router.get("/burgers", function(req, res){
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		//sending the index view with the handlebars object
		res.render('index', hbsObject);
	});
});

router.post("/burgers/create", function(req, res){
	console.log('akjfhkajhds')
	burger.create(req.body.burger_name, function(result){
		console.log(result);
		res.redirect("/");
	});
});

router.put("/burgers/update", function(req,res){
	burger.update(req.body.burger_id, function(result){
		console.log(result);
		res.redirect("/");
	});
});

module.exports = router;