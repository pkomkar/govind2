const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    Email:{
        type:String,
       
    },
    Password:{
        type:String,
        
    },
},{
timestamps:true
})
module.exports = mongoose.model("admin",adminSchema)