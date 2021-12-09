var express = require('express');
var router = express.Router();

const auth = false

/* GET home page. */
router.get('/', function(req, res, next) {
  auth ? res.render('index', { title: 'Express' }) : res.redirect('/auth');
});

module.exports = router;
