const router = require('express').Router()

const usersRouter = require('./users.router')
const roomsRouter = require('./rooms.router')
const authRouter = require('./auth.router')
const { authUser } = require('../utils') // Authenticated Route

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/rooms', roomsRouter)


router.get('/profile', authUser, (req, res) => {
  res.json(res.locals.user)
})

module.exports = router
