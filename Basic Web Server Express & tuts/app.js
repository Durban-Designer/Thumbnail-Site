var express = require("express");
var bodyParser = require("body-parser");
var port = 8080;
var compression = require('compression')
var app = express()
app.use(compression())
var router = express.Router();
var path = __dirname + "/views/";

app.use(bodyParser.json());
app.use(express.static(path));
app.use("/",router);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS')
  next()
})

router.get("*", (req,res) => {
  res.sendFile(path + "index.html");
})

router.use( (req,res,next) => {
  console.log("/" + req.method);
  next();
})


app.listen(port, () => {
  console.log("Live at Port " + port);
});