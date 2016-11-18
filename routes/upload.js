"use strict"
var express = require("express")
var router = express.Router();
var ExifImage = require('exif').ExifImage;
// <<<<<<< HEAD
//
// =======
// >>>>>>> df8e3aa9c7c596571164211e955d4333ba22411d
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
// <<<<<<< HEAD
// 	var filePath = req.files[0].path;
// 	var imageExifData = [];
// 	var filePaths = [];
//
// 	try {/////Start try catch block
//     new ExifImage({ image : filePath }, function (error, exifData) {
//         if (error){
//             console.log('Error: ' + error.message);
//         }else{
// 				for(let i = 0; i < req.files.length; i++){
//             console.log('this is the metaData', exifData); // Do something with your data!
// 						imageExifData.push(exifData);
// 					}///end for loop
// 				}//end else block
//     });//end new ExifImage
// 	}catch(error){
//     console.log('Error: ' + error.message);
// 	}////end try catch block
// 	res.redirect('/profile');
// });///end router.post
// =======
    res.send(filePath);
    		var filePath = req.files[0].path;

	var imageExifData = [];
	// for (var i = 0; i < req.files.length; i++) {
	// 	var filePath = req.files[i].path;

		try {
			new ExifImage({ image : filePath }, function (error, exifData) {
				// console.log('this is the exif data', exifData);
				if (error) {
					console.log('Error: ' + error.message);
				}
				else {
					imageExifData.push(exifData);
					console.log('this is the metaData', exifData); // Do something with your data!
				}
			});
		} catch (error) {
			console.log('Error: ' + error.message);
		}//End of the try
	// }//End of the for loop
console.log(imageExifData);

});
// >>>>>>> df8e3aa9c7c596571164211e955d4333ba22411d


//---Functions for data extractions---
function imageDataExtraction1(reqData) {
	var imageDataArr = [];
	var uploadImagesData = reqData.files;
	for (let i = 0; i < uploadImagesData.length; i++) {
		imageDataArr.push(uploadImagesData[i]);
	}
	return imageDataArr;
}

//---NOT NEEDED---
// function toDataUrl(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.responseType = 'blob';
//   xhr.onload = function() {
//     var reader = new FileReader();
//     reader.onloadend = function() {
//       callback(reader.result);
//     }
//     reader.readAsDataURL(xhr.response);
//   };
//   xhr.open('GET', url);
//   xhr.send();
// }

// function toDataUrl(src, callback, outputFormat) {
//   var img = new Image();
//   img.crossOrigin = 'Anonymous';
//   img.onload = function() {
//     var canvas = document.createElement('CANVAS');
//     var ctx = canvas.getContext('2d');
//     var dataURL;
//     canvas.height = this.height;
//     canvas.width = this.width;
//     ctx.drawImage(this, 0, 0);
//     dataURL = canvas.toDataURL(outputFormat);
//     callback(dataURL);
//   };
//   img.src = src;
//   if (img.complete || img.complete === undefined) {
//     img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
//     img.src = src;
//   }
// }

module.exports = router;
