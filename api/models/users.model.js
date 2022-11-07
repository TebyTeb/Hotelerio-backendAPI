const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  surname: {
    type: String,
    required: [true, 'Surname is required']
  },
  birthDate:{
    type: Date,
  },
  id:{
    type: String,
    required: [true, 'ID is required']
  },
  reservation:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'reservations',
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },
  phone: {
    type: Number,
  },

  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'client'],
    default: 'client'
  }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
