var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var port = 81;
var app = express();
var router = express.Router();
var path = __dirname + "/views/";
require("./user");
var users = require("./users.js");
require("./lead");
var leads = require("./leads.js");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://admin:123@ds237947.mlab.com:37947/screen-art", {
  useMongoClient: true
}, function (error) {
  console.log(error);
})

app.use(bodyParser.json());
app.use(express.static(path));
app.use("/",router);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS')
  next()
})

app.use("/users", users);
app.use("/leads", leads);

router.get("/", (req,res) => {
  res.sendFile(path + "index.html");
})

app.listen(port, () => {
  console.log("Live at Port " + port);
})

router.use( (req,res,next) => {
  console.log("/" + req.method);
  next();
})

app.use("*", (req,res) => {
  res.sendFile(path + "404.html");
})
