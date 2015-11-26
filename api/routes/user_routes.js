var models = require('../models');
var express = require('express');
var randomString = require('random-string');
var router = express.Router();


router.get('/:userId',function(req,res){
	//search params
	var where = {where:{id:req.params.userId}};
	//run query
	models.Users.find(where).then(function(user){
		res.json({
			user:user
		});
	});
});

router.get('/',function(req,res){
	models.Users.findAll().then(function(users){
		res.json({
			users:users
		});
	});
});



router.post('/login',function(req,res){
	var token = randomString({length: 25});
	var where = {where:{email:req.body.email,password:req.body.password}};
	models.Users.find(where).then(function(user){
		res.json({
			user:user,
			token:token
		})
	});
});




module.exports = router;