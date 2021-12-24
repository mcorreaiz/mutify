// Routes under /

import express from 'express';

var router = express.Router();

import { getAuth, getLogin, getCallback, getRefreshToken } from '../controllers/auth.js';

router.get('/', getAuth);
router.get('/login', getLogin);
router.get('/callback', getCallback);
router.get('/refresh_token', getRefreshToken);

export default router;
