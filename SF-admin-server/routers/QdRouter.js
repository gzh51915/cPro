const express =require('express')


const IconModule=require('../modules/IconModule')



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




//图标获取
router.get('/icon',(req,res)=>{
    IconModule.find().then(icon=>{
       res.send({status:0,data:icon})
    }).catch(error=>{
        console.log('图标获取异常',error);
        res.send({status:1,msg:'图标获取异常，请重新尝试'})
        
    })
})

module.exports=router