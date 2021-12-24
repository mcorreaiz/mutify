import { storeTrack } from '../repositories/tracks.js';

const postTracks = async (req, res, next) => {
    await storeTrack(req.body)
    res.status(201).json(req.body)
}

export default { postTracks };