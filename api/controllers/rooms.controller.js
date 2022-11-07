const RoomModel = require('../models/rooms.model')
const { handleError } = require('../utils')

module.exports = {
    getAllRooms,
    getRoomById,
    updateRoom,
    createRoom,
    deleteRoomById
  }

  function getAllRooms (req, res) {
    RoomModel
      .find()
      .then(response => res.json(response))
      .catch((err) => handleError(err, res))
  }
  
  function getRoomById (req, res) {
    RoomModel
      .findById(req.params.id)
      .then(response => res.json(response))
      .catch((err) => handleError(err, res))
  }
  
  function deleteRoomById (req, res) {
    RoomModel
      .remove({ _id: req.params.id })
      .then(response => res.json(response))
      .catch(err => handleError(err, res))
  }
  
  function updateRoom (req, res) {
    RoomModel
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      })
      .then(response => res.json(response))
      .catch((err) => handleError(err, res))
  }
  function createRoom (req, res){
    RoomModel.create(req.body)
    .then((room)=> res.json(room))
    .catch((err) => res.json(err))
  }