const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
getAllRooms,
getRoomById,
updateRoom,
deleteRoomById
} = require('../controllers/rooms.controller')

router.get('/',authUser, getAllRooms)
router.get('/:id',authUser, getRoomById)
router.put('/:id',authUser, updateRoom)
router.delete('/:id',authUser, deleteRoomById)

module.exports = router
