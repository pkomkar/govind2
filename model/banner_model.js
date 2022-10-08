const mongoose = require("mongoose")

const BannerSchema = mongoose.Schema({
    BannerId:{
        type:Number,
    },
   BannerTitle:{
     type:String,
    },   
    file:{
        type:String,
    }
},{
timestamps:true
})
module.exports = mongoose.model("Banner",BannerSchema)