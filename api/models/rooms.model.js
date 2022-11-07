const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
  RoomNumber: {
    type: Number,
    required: [true, 'Room number is required']
  },
  RoomFloor: {
    type: Number,
    required: [true, 'Room floor is required']
  },
  TypeOfRoom:{
    type: String
  },
  Occupied:{
    type: Boolean,
    required: [true, 'Is it occupied?']
  },
  Prepared:{
    type:Boolean,
    required: [true, 'Is it prepared?']
  }
})

const userModel = mongoose.model('room', roomSchema)
module.exports = roomModel
