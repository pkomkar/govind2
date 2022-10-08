const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    UserId:{
        type:String,
    },
    userName:{
     type:String,
    },
    Email:{
        type:String,
      
    },
    Password:{
        type:String,
      
    },
    Mobile:{
        type:Number, 
    },
    AccountStatus:{
        type:Boolean,
    },
    DOB:{
        type:String
    },
    Gender:{
        type:String
    }
},{
timestamps:true
})
module.exports = mongoose.model("user",userSchema)