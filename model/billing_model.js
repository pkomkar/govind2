const mongoose = require("mongoose")

const billingSchema = mongoose.Schema({
    BillinId:{
        type:Number
    },
    CountryId:{
        type:Number,
    },
    UserId:{
        type:String
    },
    StateId:{
        type:Number
    },
    OrderId:{
        type: Number
    },
},{
timestamps:true
})
module.exports = mongoose.model("billing",billingSchema)