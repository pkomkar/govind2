const mongoose = require("mongoose")

const bannerSchema = mongoose.Schema({
    BannerImageId:{
        type:Number
    },
    BannerId:{
        type:Number,
    },
    file:{
        type:String,
        
    },
},{
timestamps:true
})
module.exports = mongoose.model("bannerImage",bannerSchema)