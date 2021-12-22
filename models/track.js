const mongoose = require('mongoose');
const SpotifyItemSchema = require('./spotify_item_schema')
const TrackFeaturesSchema = require('./track_features_schema')
const extendSchema = require('../utils/extend_schema')
const Artist = require('./artist')
const Album = require('./album')

const schema = extendSchema(SpotifyItemSchema, {
    duration_ms: Number,
    artists: [Artist.schema],
    album: Album.schema,
    popularity: Number,
    features: TrackFeaturesSchema
});

const model = mongoose.model('Track', schema);

module.exports = model;