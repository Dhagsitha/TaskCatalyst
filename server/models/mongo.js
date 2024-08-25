const mongoose=require("mongoose")
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("users",newSchema)
module.exports=collection
