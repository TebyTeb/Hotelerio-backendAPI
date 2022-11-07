const ReservModel = require('../models/reservation.model')
const { handleError } = require('../utils')


function getAllReservs(req, res) {
    ReservModel
        .find()
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
    ReservModel
        .create(req.body)
        .then((room) => res.json(room))
        .catch((err) => res.json(err))
}

module.exports = {
    getAllReservs,
    getReservById,
    deleteReservById,
    updateReserv,
    createReserv
}