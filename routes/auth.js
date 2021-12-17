// Routes under /

var express = require('express');
var router = express.Router();

const {
    getAuth,
    getLogin,
    getCallback,
    getRefreshToken } = require('../controllers/auth')

router.get('/', getAuth);
router.get('/login', getLogin);
router.get('/callback', getCallback);
router.get('/refresh_token', getRefreshToken);

module.exports = router;
