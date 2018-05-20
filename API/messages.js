var express = require("express");
var mongodb = require("mongodb");
var _ = require("lodash");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var Message = mongoose.model("Message");

app.use(bodyParser.json());

router.post("/", (req,res) => {
  var newMessage = new Message({
  name: req.body.name,
  email: req.body.email,
  message: req.body.message,
  article: req.body.article,
  time: req.body.time
  })

  newMessage.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

router.get("/:article",(req, res) => {
  var messageArticle = req.params["article"];
  Message.find({"article": {$regex: '^' + messageArticle}},function (err, messages) {
    if (err) {
      res.send(err);
    } else {
      res.send(messages);
    }
  })
})

module.exports = router;
