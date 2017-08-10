var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

mongoose.connect('mongodb://192.168.104.12:27017/shop');
mongoose.connection.on('connected', function(){
  console.log("Mongodb connected success");
})
mongoose.connection.on('error', function(){
  console.log("Mongodb connected fail");
})
mongoose.connection.on('disconnected', function(){
  console.log("Mongodb connected disconnected");
})
router.get("/list", function(req, res, next){
  var goodModel = Goods.find({},function (err, docs) {
    console.log(docs);
    res.json({
      status: '0',
      result:docs
    })
  })
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource  weiquan ddddddd');
});

module.exports = router;
