const { storeTrack } = require("../repositories/tracks")

const postTracks = async (req, res, next) => {
    await storeTrack(req.body)
    res.status(201).json(req.body)
}

module.exports = { postTracks }