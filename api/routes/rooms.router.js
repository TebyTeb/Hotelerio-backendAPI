const router = require('express').Router()
const {
    authUser,
    adminCheck
} = require('../utils') // Authenticated Route

const {
    getAllRooms,
    getRoomById,
    updateRoom,
    createRoom,
    deleteRoomById,
    getOccupants,
    checkAvailable
} = require('../controllers/rooms.controller')

router.get('/', authUser, adminCheck, getAllRooms)
router.get('/available', authUser, checkAvailable)
router.get('/:id', authUser, adminCheck, getRoomById)
router.get('/:roomid/occupants', authUser, adminCheck, getOccupants)
router.post('/', authUser, adminCheck, createRoom)
router.put('/:id', authUser, adminCheck, updateRoom)
router.delete('/:id', authUser, adminCheck, deleteRoomById)


module.exports = router
