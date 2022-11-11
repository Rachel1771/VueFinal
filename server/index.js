//搭建express服务
const express = require('express')
const app = express()

//post 请求表单数据
app.use(express.urlencoded({ extended: true }))
//路由
const router = require('./router')

app.use('/api',router)


app.listen(8989,()=>{
    console.log(8989);
})
