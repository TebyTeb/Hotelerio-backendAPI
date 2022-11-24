const ReservModel = require('../models/reservation.model')
const RoomModel = require('../models/rooms.model')
const { handleError } = require('../utils')


function getAllReservs(req, res) {
  ReservModel
    .find(req.query)
    .populate('room')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getReservById(req, res) {
  ReservModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteReservById(req, res) {
  ReservModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateReserv(req, res) {
  ReservModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createReserv(req, res) {
  RoomModel.findById(req.body.room)
    .then(room => {
      // if (room.occupied === true) {
      //     res.json('Already Occupied')
      // } else {
      let reserv = {
        client: res.locals.user.id,
        room: req.body.room,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        companions: req.body.companions
      }
      ReservModel
        .create(reserv)
        .then((result) => {
          //room.occupied = true
          room.save()
            .then(res.json(result))
            .catch((err) => res.json(err))
        })
        .catch((err) => res.json(err))
    }
      // }
    )
    .catch((err) => res.json(err))
}

module.exports = {
  getAllReservs,
  getReservById,
  deleteReservById,
  updateReserv,
  createReserv
}