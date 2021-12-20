const mongoose = require('mongoose');
const SpotifyItemSchema = require('./SpotifyItemSchema')
const TrackFeaturesSchema = require('./SpotifyItemSchema')
const extendSchema = require('../utils/extendSchema')
const Artist = require('./Artist')
const Album = require('./Album')

const schema = extendSchema(SpotifyItemSchema, {
    duration_ms: Number,
    artists: [Artist.schema],
    album: Album,
    popularity: Number,
    features: TrackFeaturesSchema
});

const model = mongoose.model('Track', schema);

module.exports = model;