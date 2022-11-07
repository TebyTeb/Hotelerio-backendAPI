const mongoose = require('mongoose')
const companionSchema = require('./companion.model')

const reservSchema = new mongoose.Schema({
    client:{
        type:mongoose.Schema.Types.ObjectId
    },
    Room: {
        type:mongoose.Schema.Types.ObjectId
    } ,
    checkin:{
        type: Date
    },
    checkout:{
        type:Date
    },
    companions:[companionSchema]

})

const reservModel = mongoose.model('reserv', reservSchema)
module.exports = reservModel
