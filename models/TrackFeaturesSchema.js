const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  acousticness: Number,
  danceability: Number,
  energy: Number,
  instrumentalness: Number,
  liveness: Number,
  loudness: Number,
  speechiness: Number,
  valence: Number,
});

module.exports = schema;