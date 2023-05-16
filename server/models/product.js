const mongoose=require("mongoose")

const carSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:number
    },
    type:{
        type:String,
        require:true
    },
    model:{
        type:String,
        require:true
    },
    milage:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    avalableFrom:{
       type:String,
       require:true
    },
    availableTill:{
        type:String,
        require:true
    },
    perKm:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    carDetails:{
        type:String,
        require:true
    },
    Details:{
        type:String,
        require:true
    },
    slug:{
        type:String,
        require:true,
        lowercase:true
    }

  
})


module.exports=mongoose.model("carDetail",carSchema)