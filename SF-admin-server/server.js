const mongoose = require('mongoose')
const express = require('express')
const app = express()
const JwtUtil = require('./utils/jwt')


app.use(express.static('./'))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const QdRouter = require('./routers/QdRouter')
app.use('/v1', QdRouter)

app.use((req, res, next) => {
    if (req.url != '/v1/admin/login') {
        let token = req.headers.token;
        let jwt = new JwtUtil(token)
        let result = jwt.verifyToken()
        if (result === "error") {
            res.send({
                status: 403,
                msg: '登录已过期，请重新登录'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

const HdRouter = require('./routers/HdRouter')
app.use('/v1', HdRouter)


mongoose.connect('mongodb://localhost/admin_manage', { useNewUrlParser: true }).then(() => {
    console.log('连接数据库成功')
    app.listen('5000', () => {
        console.log('服务器启动成功, 请访问: http://localhost:5000')
    })
}).catch(error => {
    console.log('连接数据库失败', error);

})