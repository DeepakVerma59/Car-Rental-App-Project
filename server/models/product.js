const mongoose=require("mongoose")

const carSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number
    },
    type:{
        type:String,
    },
    model:{
        type:String,
        required:true
    },
    mileage:{
        type:String,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    avalaibleFrom:{
       type:String,
       required:true
    },
    availableTill:{
        type:String,
        required:true
    },
    pricePerKm:{
        type:String,
        required:true
    },
    description:{
        type:String,

    },
    carDetails:{
        type:String,
    
    },
    Details:{
        type:String,
    
    }

  
},{timestamps:true})


module.exports=mongoose.model("carDetail",carSchema)