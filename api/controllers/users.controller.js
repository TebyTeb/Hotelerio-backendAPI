const UserModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const { handleError } = require('../utils')


function getAllUsers(req, res) {
  UserModel
    .find()
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
      .remove({ _id: req.params.id })
      .then(response => res.json(response))
      .catch(err => handleError(err, res))
}

function updateUser(req, res) {
  if (req.body.password !== undefined) {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
  }
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser
}