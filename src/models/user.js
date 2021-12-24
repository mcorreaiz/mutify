import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const model = mongoose.model('User', schema);

export default model;