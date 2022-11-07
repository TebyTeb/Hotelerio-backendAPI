const UserModel = require('../models/rooms.model')
const { handleError } = require('../utils')

module.exports = {
    getAllRooms,
    getRoomById,
    updateRoom,
    deleteRoomById
  }

  function getAllRooms (req, res) {
    UserModel
      .find()
      .then(response => res.json(response))
      .catch((err) => handleError(err, res))
  }
  
  function getRoomById (req, res) {
    UserModel
      .findById(req.params.id)
      .then(response => res.json(response))
      .catch((err) => handleError(err, res))
  }
  
  function deleteRoomById (req, res) {
    UserModel
      .remove({ _id: req.params.id })
      .then(response => res.json(response))
      .catch(err => handleError(err, res))
  }
  
  function updateRoom (req, res) {
    UserModel
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      })
      .then(response => res.json(response))
      .catch((err) => handleError(err, res))
  }
  