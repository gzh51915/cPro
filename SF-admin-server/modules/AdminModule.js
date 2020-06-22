//管理员
const mongoose=require('mongoose')
const md5 = require('blueimp-md5')

const adminSchema = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    phone:String,
    email:String,
    crea_time:{type:Number,default:Date.now},
})

const AdminModule =mongoose.model('admins',adminSchema)

AdminModule.findOne({username:'admin'}).then(user=>{
    if(!user){
        AdminModule.create({username:'admin',password:md5('admin')}).then(res=>{
            console.log('初始化用户：用户名：admin 密码：admin');
            
        })
    }
})

module.exports =AdminModule