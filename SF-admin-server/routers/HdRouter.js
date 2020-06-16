const express =require('express')
const md5 =require('blueimp-md5')


const AdminModule=require('../modules/AdminModule')
const IconModule=require('../modules/IconModule')

const JwtUtil =require('../utils/jwt')

//得到路由器对象
const router = express.Router()

// CORS
router.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    
        // 跨域请求CORS中的预请求
        if(req.method=="OPTIONS") {
            res.sendStatus(200);/*让options请求快速返回*/
        } else{
            next();
        }
    });





//管理员登录
router.post('/admin/login',(req,res)=>{
    const {username,password}=req.body
    AdminModule.findOne({username,password:md5(password)}).then(admin=>{
        if(admin){
            let _id=admin._id.toString();
            let jwt=new JwtUtil(_id)
            let token =jwt.generateToken()
            res.send({status:0,data:admin,token})
        }else{
            res.send({status:1,msg:'用户名或密码不正确！'})
        }
    }).catch(error=>{
        console.log('登录异常',error);
        res.send({status:1,msg:'登录异常，请重新尝试'})
        
    })
})

router.get('/test',(req,res)=>{
       res.send({status:0,mag:'测试'})
})

module.exports=router