import { storeTrack } from '../repositories/tracks.js';

export const postTracks = async (req, res, next) => {
    await storeTrack(req.body)
    res.status(201).json(req.body)
}
