const express =require('express')
const md5 =require('blueimp-md5')


const AdminModule=require('../modules/AdminModule')
const UserModule=require('../modules/UserModule')
const ArtcleModule=require('../modules/ArtcleModule')
const BannerModule=require('../modules/BannerModule')
const QuestionModule=require('../modules/QuestionModule')
const AswersModule=require('../modules/AswersModule')

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
    ArtcleModule.deleteOne({_id})
      .then((doc) => {
        res.send({status: 0,msg:"删除成功"})
      }).catch(err=>{console.log(err);
      })
  })


//更新文章
router.post('/artcle/update',(req,res)=>{
    const artcle =req.body
    ArtcleModule.findByIdAndUpdate({_id:artcle._id},artcle).then(oldArtcle=>{
        const data =Object.assign(oldArtcle,artcle)
        res.send({status:0,data})
    }).catch(err=>{
        console.log("更新文章异常",err)
        res.send({status:1,msg:"文章更新异常，请重新尝试"})
    })
})

//轮播图修改
router.post('/banner/update',(req,res)=>{
    const banner =req.body
    BannerModule.findByIdAndUpdate({_id:banner._id},banner).then(oldBanner=>{
        const data =Object.assign(oldBanner,banner)
        res.send({status:0,data})
    }).catch(err=>{
        console.log("更新轮播图异常",err)
        res.send({status:1,msg:"轮播图更新异常，请重新尝试"})
    })
})


//轮播图添加
router.post('/banner/add',(req,res)=>{
    const banner =req.body
    BannerModule.create(banner).then(banner=>{
        res.send({status:0,data:banner})
    }).catch(err=>{
        console.log("添加轮播图异常",err)
        res.send({status:1,msg:"轮播图添加异常，请重新尝试"})
    })
})

//轮播图删除
router.post('/banner/delete',(req,res)=>{
    const {id:_id} =req.body
    BannerModule.deleteOne({_id}).then(banner=>{
        res.send({status:0,msg:'删除轮播图成功'})
    }).catch(err=>{
        console.log("删除轮播图异常",err)
        res.send({status:1,msg:"轮播图删除异常，请重新尝试"})
    })
})


//更新问题
router.post('/question/update',(req,res)=>{
    const question =req.body
    QuestionModule.findByIdAndUpdate({_id:question._id},question).then(oldQuestion=>{
        const data =Object.assign(oldQuestion,question)
        res.send({status:0,data})
    }).catch(err=>{
        console.log("更新问题异常",err)
        res.send({status:1,msg:"问题更新异常，请重新尝试"})
    })
})

//更新回答
router.post('/aswer/update',(req,res)=>{
    const aswer =req.body
    // console.log('aswer: ', aswer);
    AswersModule.findByIdAndUpdate({_id:aswer._id},aswer).then(oldAswer=>{
        const data =Object.assign(oldAswer,aswer)
        res.send({status:0,data})
    }).catch(err=>{
        console.log("更新回答异常",err)
        res.send({status:1,msg:"回答更新异常，请重新尝试"})
    })
})

//问题删除
router.post('/question/delete',(req,res)=>{
    // console.log('req.body: ', req.body);
    const {id:_id} =req.body
    QuestionModule.deleteOne({_id}).then(question=>{
        // console.log('question: ', question);
        if(question){
            AswersModule.deleteOne({question_id:_id}).then(aswer=>{
                res.send({status:0,msg:'删除问题成功,且问题也已经删除'})
            })
        }
    }).catch(err=>{
        console.log("删除问题异常",err)
        res.send({status:1,msg:"问题删除异常，请重新尝试"})
    })
})

//单个回答删除
router.post('/aswer/delete',(req,res)=>{
    const {id:_id} =req.body
    AswersModule.deleteOne({_id}).then(aswer=>{
        res.send({status:0,msg:'删除回答成功'})
    }).catch(err=>{
        console.log("删除回答异常",err)
        res.send({status:1,msg:"删除回答异常，请重新尝试"})
    })
})

module.exports=router