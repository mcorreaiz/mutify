const mongoose = require('mongoose');
const SpotifyItemSchema = require('./SpotifyItemSchema')
const extendSchema = require('../utils/extendSchema')

const schema = extendSchema(SpotifyItemSchema, {});
const model = mongoose.model('Album', schema);

module.exports = model;