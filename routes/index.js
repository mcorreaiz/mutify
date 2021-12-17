var express = require('express');
var router = express.Router();

const { getIndex } = require('../controllers/index')

router.get('/', getIndex);

module.exports = router;
