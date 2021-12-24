import express from 'express';
var router = express.Router();

import { postTracks } from '../controllers/tracks.js';

router.post('/', postTracks);

export default router;
