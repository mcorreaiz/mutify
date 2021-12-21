var express = require('express');
var router = express.Router();

const { getIndex } = require('../controllers/tracks')

router.post('/', createTracks);

module.exports = router;
