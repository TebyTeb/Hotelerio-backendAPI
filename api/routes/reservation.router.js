const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
    getAllReservs,
    getReservById,
    deleteReservById,
    updateReserv,
    createReserv
} = require('../controllers/reservation.controller')

router.get('/', authUser, getAllReservs)
router.get('/:id', authUser, getReservById)
router.post('/:id', authUser, createReserv)
router.put('/:id', authUser,updateReserv)
router.delete('/:id', authUser, deleteReservById)

module.exports = router