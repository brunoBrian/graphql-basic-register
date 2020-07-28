import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
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
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
});

export default mongoose.model('User', Schema);