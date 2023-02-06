const RoomModel = require('../models/rooms.model')
const ReservModel = require('../models/reservation.model')
const CompanionModel = require('../models/companion.model')
const { handleError } = require('../utils')

module.exports = {
  getAllRooms,
  getRoomById,
  updateRoom,
  createRoom,
  deleteRoomById,
  checkAvailable,
  getOccupants
}

function getAllRooms (req, res) {
  RoomModel
    .find(req.query)
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
function createRoom (req, res) {
  RoomModel.create(req.body)
    .then((room) => res.json(room))
    .catch((err) => res.json(err))
}

// Filter using queries, gte(greatherThanOrEqualTo), lte(LesserThanOrEqualTo)
function checkAvailable (req, res) {
  const userCheckin = new Date(req.query.checkin)
  const userCheckout = new Date(req.query.checkout)

  ReservModel
    .find({
      $or: [
        { $and: [{ checkin: { $gte: userCheckin } }, { checkin: { $lte: userCheckout } }] },
        { $and: [{ checkout: { $gte: userCheckin } }, { checkout: { $lte: userCheckout } }] },
        { $and: [{ checkin: { $lte: userCheckin } }, { checkout: { $gte: userCheckout } }] },
        { $and: [{ checkin: { $gte: userCheckin } }, { checkout: { $lte: userCheckout } }] }
      ]
    })
    .then(result => {
      const roomIds = result.map(el => el.room.toString())
      RoomModel
        .find({ _id: { $nin: roomIds } })
        .then(result => res.json(result))
        .catch((err) => handleError(err, res))
    })
    .catch((err) => handleError(err, res))
}

function getOccupants (req, res) {
  ReservModel.findOne({ room: req.params.roomid })
    .then(response => {
      console.log(response.companions)
      const guests = {}
      guests.client = res.locals.user.name + ' ' + res.locals.user.surname
      guests.companions = response.companions
      res.json(guests)
    })
}
