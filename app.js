var express = require("express")
var app = express()
var routes = require("./routes/index")
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser')
var cloudinary = require('cloudinary');

const PORT = 1337;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.set("view engine", "ejs");

app.use('/public', express.static('public'))
app.use('/editProfile', routes.editProfile);
app.use('/profile', routes.profile);
app.use('/friends',routes.friends);
app.use('/upload', routes.upload);


app.get("/", function(req, res){
	console.log('Cookies: ', req.cookies);
	res.render("index");
})

// app.use(express.bodyParser({
//   keepExtensions: true
// })
// );
//
// app.post("*", function(req, res) {
//   res.end(JSON.stringify(req.files) + '\n');
// });

app.listen("1337", function(){
	console.log(`Server is listening on port ${PORT}`)
})
