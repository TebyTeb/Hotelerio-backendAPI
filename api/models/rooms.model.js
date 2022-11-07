const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: [true, 'Room number is required']
  },
  roomFloor: {
    type: Number,
    required: [true, 'Room floor is required']
  },
  typeOfRoom:{
    type: String
  },
  occupied:{
    type: Boolean,
    required: [true, 'Is it occupied?']
  },
  prepared:{
    type:Boolean,
    required: [true, 'Is it prepared?']
  },
  capacity:{
    type:Number,
    max:5,
    min:1,
    required:true
  }
})

const roomModel = mongoose.model('room', roomSchema)
module.exports = roomModel
