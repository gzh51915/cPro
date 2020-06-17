//用户
const mongoose=require('mongoose')
const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    phone:String,
    email:String,
    crea_time:{type:Number,default:Date.now},
})

const UserModule =mongoose.model('users',userSchema)



module.exports =UserModule