const mongoose = require('mongoose')
const express = require('express')
const app = express()


app.use(express.static('./'))

app.use(express.urlencoded({extended:true}))

app.use(express.json())

// const cookieParser =require('cookie-parser')
// app.use(cookieParser)

const indexRouter=require('./routers')
app.use('/v1',indexRouter)

mongoose.connect('mongodb://localhost/admin_manage',{useNewUrlParser:true}).then(()=>{
    console.log('连接数据库成功')
    app.listen('5000',()=>{
        console.log('服务器启动成功, 请访问: http://localhost:5000')
    })
}).catch(error=>{
    console.log('连接数据库失败',error);
    
})