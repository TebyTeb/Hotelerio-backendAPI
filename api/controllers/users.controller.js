const UserModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const { handleError } = require('../utils')


function getAllUsers(req, res) {
  UserModel
    .find(req.query)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

//admin: any, client: self
function getUserById(req, res) { 
    UserModel
      .findById(req.params.id)
      .then(response => res.json(response))
      .catch((err) => handleError(err, res))
}

function deleteUserById(req, res) {
    UserModel
      .remove({id: req.params.id })
      .then(response => res.json(response))
      .catch(err => handleError(err, res))
}

function updateUser(req, res) {
  if (req.body.password !== undefined) {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
  }
  if (res.locals.user.role !== 'admin' && req.body.role !== undefined){
    req.body.role = res.locals.user.role
  }
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createUser(req,res){
  UserModel.create(req.body)
  .then((user)=> res.json(user))
  .catch((err) => res.json(err))
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUser
}