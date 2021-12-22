var express = require('express');
var router = express.Router();

const { postTracks } = require('../controllers/tracks')

router.post('/', postTracks);

module.exports = router;
