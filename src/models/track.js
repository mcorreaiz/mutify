import mongoose from 'mongoose';
import SpotifyItemSchema from './spotify_item_schema.js';
import TrackFeaturesSchema from './track_features_schema.js';
import extendSchema from '../utils/extend_schema.js';
import Artist from './artist.js';
import Album from './album.js';

const schema = extendSchema(SpotifyItemSchema, {
    duration_ms: Number,
    artists: [Artist.schema],
    album: Album.schema,
    popularity: Number,
    features: TrackFeaturesSchema
});

const model = mongoose.model('Track', schema);

export default model;