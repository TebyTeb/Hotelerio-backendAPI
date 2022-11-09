const mongoose = require('mongoose')

const companionSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    surname:{
        type:String,
        required: true
    },
    identification:{
        type:String,
        required: true
    }
})


module.exports = companionSchema