import { Schema } from 'mongoose';

const schema = new Schema({
    name: String,
    spotify_url: String,
    href: String,
    id: String,
    uri: String
});

export default schema;