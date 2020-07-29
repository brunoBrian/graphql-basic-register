import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  complement: String,
  referencePoint: String
});

export default mongoose.model('Address', Schema);