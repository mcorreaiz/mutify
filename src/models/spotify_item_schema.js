import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    spotify_url: String,
    href: String,
    id: String,
    uri: String
});

export default schema;