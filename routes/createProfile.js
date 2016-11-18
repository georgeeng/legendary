"use strict"
var express = require("express")
var router = express.Router();

router.route('/').get(function(req,res){
	res.render('createProfile')
});

module.exports = router;
