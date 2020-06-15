const express =require('express')
const md5 =require('blueimp-md5')

const AdminModule=require('../modules/AdminModule')

//得到路由器对象
const router = express.Router()


//管理员登录
router.post('/admin/login',(req,res)=>{
    const {username,password}=req.body
    AdminModule.findOne({username,password:md5(password)}).then(admin=>{
        if(admin){
            res.cookie('adminid',admin._id,{maxAge:1000*60*60*24})
            res.send({status:0,data:admin})
        }else{
            res.send({status:1,msg:'用户名或密码不正确！'})
        }
    }).catch(error=>{
        console.log('登录异常',error);
        res.send({status:1,msg:'登录异常，请重新尝试'})
        
    })
})

module.exports=router