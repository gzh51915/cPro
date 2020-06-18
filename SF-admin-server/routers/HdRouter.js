const express =require('express')
const md5 =require('blueimp-md5')


const AdminModule=require('../modules/AdminModule')
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
    // res.setHeader("Access-Control-Allow-Headers", "Content-Type,token");
    
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

//获取所有用户
router.get('/users',(req,res)=>{
    UserModule.find().then(user=>{
       res.send({status:0,data:user})
    }).catch(error=>{
        console.log('用户获取异常',error);
        res.send({status:1,msg:'用户获取异常，请重新尝试'})
        
    })
})

//增加文章
router.post('/artcle/add',(req,res)=>{
    const artcle=req.body
    ArtcleModule.create(artcle).then(artcle=>{
        res.send({status:0,data:artcle})
    }).catch(error=>{
        console.error('添加文章异常', error)
      res.send({status: 1, msg: '添加文章异常, 请重新尝试'})
    })
})

//删除文章
router.post('/artcle/delete', (req, res) => {
    const {id:_id} = req.body
    console.log('req.body: ', req.body);

    console.log(_id);
    
    ArtcleModule.deleteOne({_id})
      .then((doc) => {
          console.log('doc: ', doc);
        res.send({status: 0,msg:"删除成功"})
      }).catch(err=>{console.log(err);
      })
  })


//更新文章
router.post('/artcle/update',(req,res)=>{
    const artcle =req.body
    ArtcleModule.findOneAndUpdate({_id:artcle._id},artcle).then(oldArtcle=>{
        const data =Object.assign(oldArtcle,artcle)
        res.send({status:0,data})
    }).catch(err=>{
        console.log("更新文章异常",err)
        res.send({status:1,msg:"文章更新异常，请重新尝试"})
    })
})

module.exports=router