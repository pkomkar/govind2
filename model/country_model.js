const mongoose = require("mongoose")

const CountrySchema = mongoose.Schema({
    CountryName:{
        type:String,
    },
    countryCode:{
     type:String,
    },   
    CountryId:{
        type:Number,
    },
},{
timestamps:true
})
module.exports = mongoose.model("Country",CountrySchema)