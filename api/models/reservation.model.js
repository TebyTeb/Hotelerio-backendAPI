const mongoose = require('mongoose')
const companionSchema = require('./companion.model')

const reservSchema = new mongoose.Schema({
    client:{
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },
    Room: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    } ,
    checkin:{
        type: Date,
        required: true
    },
    checkout:{
        type:Date,
        required: true
    },
    companions:[companionSchema]

})

const reservModel = mongoose.model('reserv', reservSchema)
module.exports = reservModel
