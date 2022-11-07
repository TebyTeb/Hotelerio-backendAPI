const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser
} = require('../controllers/users.controller')

router.get('/',authUser, getAllUsers)
router.get('/:id',authUser, getUserById)
router.put('/:id',authUser, updateUser)
router.delete('/:id',authUser, deleteUserById)

module.exports = router
