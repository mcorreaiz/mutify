const mongoose = require('mongoose');
const SpotifyItemSchema = require('./spotify_item_schema')
const extendSchema = require('../utils/extend_schema')

const schema = extendSchema(SpotifyItemSchema, {});
const model = mongoose.model('Album', schema);

module.exports = model;