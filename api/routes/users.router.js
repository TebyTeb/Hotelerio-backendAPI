const router = require('express').Router()
const {
    authUser,
    adminCheck,
    roleCheck
} = require('../utils') // Authenticated Route

const {
    getAllUsers,
    getUserById,
    deleteUserById,
    createUser,
    updateUser
} = require('../controllers/users.controller')

<<<<<<< HEAD
router.get('/', authUser, getAllUsers)
router.get('/:id',authUser, getUserById)
router.put('/:id', authUser, updateUser)
router.delete('/:id',authUser, deleteUserById)
=======
router.get('/', authUser, adminCheck, getAllUsers)
router.get('/:id', authUser, roleCheck, getUserById)
router.post('/',authUser,adminCheck,createUser)
router.put('/:id', authUser, roleCheck, updateUser)
router.delete('/:id', authUser, roleCheck, deleteUserById)
>>>>>>> main

module.exports = router
