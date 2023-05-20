const mongoose=require("mongoose")

const bookingSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    carDetails:{
        type:String,
    },
    details:{
        type:String,
    },
    origin:{
        type:String,
    },
    destination:{
        type:String,
    },
    startDate:{
        type:String,
    },
    endDate:{
        type:String,
    },
    bookingId:{
        type:String,
    },
    bookingDate:{
        type:String,
    },
    bookingTime:{
        type:String,
    }

  
},{timestamps:true})


module.exports=mongoose.model("bookingDetail",bookingSchema)