var express = require('express');
var User = require('../models/users')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<h1>API working</h1>");
});




module.exports = router;
