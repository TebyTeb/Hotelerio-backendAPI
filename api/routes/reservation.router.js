const router = require('express').Router()
const {
  authUser,
  roleCheck
} = require('../utils') // Authenticated Route
const {
  getAllReservs,
  getReservById,
  deleteReservById,
  updateReserv,
  createReserv
} = require('../controllers/reservation.controller')

router.get('/', authUser, getAllReservs)
router.get('/:id', authUser, getReservById)
router.post('/', authUser, createReserv) // Implement: link userID to reservation. Debate: link userID in reserv and reservID in user?
router.put('/:id', authUser, roleCheck, updateReserv)
router.delete('/:id', authUser, roleCheck, deleteReservById)

module.exports = router
