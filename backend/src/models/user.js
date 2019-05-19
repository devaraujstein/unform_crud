const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        require : true,
        uniqued : true
    },
    password : {
        type : String,
        required : true,
        select : false
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

userSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('User',userSchema)