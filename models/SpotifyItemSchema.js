const Schema = require('mongoose').Schema;

const schema = new Schema({
    name: String,
    type: String,
    spotify_url: String,
    href: String,
    id: String,
    uri: String
});

module.exports = schema;