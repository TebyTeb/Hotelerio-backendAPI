const mongoose = require('mongoose')

const companionSchema = new mongoose.Schema({
    name:{
        type:String
    },
    Surname:{
        type:String
    },
    id:{
        type:String
    }
})


module.exports = companionSchema


