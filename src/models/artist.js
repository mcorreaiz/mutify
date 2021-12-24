import mongoose from 'mongoose';
import SpotifyItemSchema from './spotify_item_schema.js';
import extendSchema from '../utils/extend_schema.js';

const schema = extendSchema(SpotifyItemSchema, {});
const model = mongoose.model('Artist', schema);

export default model;