const mongoose = require('mongoose')

const companionSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    Surname:{
        type:String,
        required: true
    },
    id:{
        type:String,
        required: true
    }
})


module.exports = companionSchema