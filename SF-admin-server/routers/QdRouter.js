const express =require('express')
const md5=require('blueimp-md5')

const IconModule=require('../modules/IconModule')
const UserModule=require('../modules/UserModule')
const ArtcleModule=require('../modules/ArtcleModule')
const JwtUtil =require('../utils/jwt')


//得到路由器对象
const router = express.Router()

// CORS
router.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    
        // 跨域请求CORS中的预请求
        if(req.method=="OPTIONS") {
            res.sendStatus(200);/*让options请求快速返回*/
        } else{
            next();
        }
});

//登录
router.post('/user/login',(req,res)=>{
    const {username,password}=req.body
    UserModule.findOne({username,password:md5(password)}).then(user=>{
        if(user){
            let _id=user._id.toString();
            let jwt=new JwtUtil(_id)
            let token =jwt.generateToken()
            res.send({status:0,data:user,token})
        }else{
            res.send({status:1,msg:'用户名或密码不正确！'})
        }
    }).catch(error=>{
        console.log('登录异常',error);
        res.send({status:1,msg:'登录异常，请重新尝试'})
        
    })
})



//图标获取
router.get('/icon',(req,res)=>{
    IconModule.find().then(icon=>{
       res.send({status:0,data:icon})
    }).catch(error=>{
        console.log('图标获取异常',error);
        res.send({status:1,msg:'图标获取异常，请重新尝试'})
        
    })
})


//文章获取
router.get('/artcle',(req,res)=>{
    ArtcleModule.find().then(artcle=>{
       res.send({status:0,data:artcle})
    }).catch(error=>{
        console.log('文章获取异常',error);
        res.send({status:1,msg:'文章获取异常，请重新尝试'})
        
    })
})

//管理员登录
router.post('/user/login',(req,res)=>{
    const {username,password}=req.body
    UserModule.findOne({username,password:md5(password)}).then(admin=>{
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



//用户注册
router.post('/user/reg',(req,res)=>{
    const {username,password}=req.body
    UserModule.findOne({username}).then(user=>{
        if(user){
            
            res.send({status:1,msg:'此用户已存在'})
        }else{
            return UserModule.create({...req.body, password: md5(password)})
        }
    }).then(user=>{
        res.send({status:0,data:user})
    }).catch(error=>{
        console.log('注册异常',error);
        res.send({status:1,msg:'注册异常，请重新尝试'})
    })
})

module.exports=router