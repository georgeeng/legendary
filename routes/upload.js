"use strict"

var express = require("express")
var router = express.Router();
var ExifImage = require('exif').ExifImage;

//---------Not sure if this is needed
var multer = require('multer');
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/uploads');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});
var upload = multer({ storage: storage });
//----------------------------------------


router.route('/').get(function(req,res){
	res.render('upload')
	// res.send("Upload an image");
});

router.post('/', upload.any(), function (req, res, next) {
	var filePath = req.files[0].path;
	var imageExifData = [];
	var filePaths = [];

	try {/////Start try catch block
    new ExifImage({ image : filePath }, function (error, exifData) {
        if (error){
            console.log('Error: ' + error.message);
        }else{
				for(let i = 0; i < req.files.length; i++){
            console.log('this is the metaData', exifData); // Do something with your data!
						imageExifData.push(exifData);
					}///end for loop
				}//end else block
    });//end new ExifImage
	}catch(error){
    console.log('Error: ' + error.message);
	}////end try catch block
	res.redirect('/profile');
});///end router.post

module.exports = router;
