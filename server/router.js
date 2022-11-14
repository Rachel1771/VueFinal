const express = require('express')
const router = express.Router()
//导入数据库 sqlFn('sql',[],res=>{})
const sqlFn = require('./mysql')
const jwt = require('jsonwebtoken')
const config = require('./secert')

const Mock = require('mockjs')

/**
 * 商品列表：获取分页 {total:'',arr:[{},{},{}],pagesize:8,}
 * 参数：page 页码
 */
router.get('/projectList', (req, res) => {
    const page = req.query.page|| 1 ;
    const sqlLen = "select * from goodslist ";
    sqlFn(sqlLen, null, data => {
        let len = data.length;
        // const sql = "select * from goodslist order by  id desc limit 8 offset" + (page - 1) * 8;
        const sql = "select * from goodslist  limit 10 offset " + (page - 1) * 10;
        sqlFn(sql, null, result => {
            if (result.length > 0) {
                res.send({
                    status: 200,
                    data: result,
                    pageSize: 8,
                    total: len
                })
            } else {
                res.send({
                    status: 500,
                    msg: "暂无数据"
                })
            }
        })
    })
})

/**
 * 商品查询接口 search
 * 参数：search
 */
router.get("/search", (req, res) => {
    var search = req.query.search;
    const sql = "select * from goodslist where concat(`name`) like '%" + search + "%'";
    sqlFn(sql, null, (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                result
            })
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            })
        }
    })
})

/**
 * 产品添加
 * 
 */
 router.get("/backend/item/insertTbItem", (req, res) => {
    /**
     * 获取参数
     */
    var id = req.query.id || "";
    var name = req.query.name || "";
    var price = req.query.price || "";
    var num = req.query.num || "";
    var position = req.query.position || "";
    var audience = req.query.audience || "";
    var description = req.query.description || "";
    

    const sql = "insert into goodslist values (?,?,?,?,?,?,?)"
    var arr = [id,name,price,num,position,audience,description];
    sqlFn(sql, arr, result => {
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                msg: "添加成功"
            })
        } else {
            res.send({
                status: 500,
                msg: "添加失败"
            })
        }
    })
})


/**
 * 统计 半年 月销量对比数据
 * 月度销售额
 */

 router.get('/sellTotal', (req, res) => {
    res.send(Mock.mock({
        success: true,
        status: 200,
        info: {
            'id|+1': 100,
            date: function () {
                var category = [];
                var dottedBase = +new Date();
                for (var i = 30; i > 0; i--) {
                    var date = new Date((dottedBase -= 1000 * 3600 * 24 * 30));
                    category.push([date.getFullYear(), date.getMonth() + 1].join("-"));
                }
                return category.slice(0, 6);
            },
            "xResult|3": [
                {
                    'xName|+1': ["家具", '手机', '家电'],
                    "data|6": [
                        { 'num|100-1000': 10 }
                    ]

                },
            ],
        }
    }))
})

/**
 * 统计数据--销售信息
 */
 router.get('/statistical', (req, res) => {
    res.send(Mock.mock({
        success: true,
        status: 200,
        "list|4": [
            {
                'id|+1': 100,
                "title|+1": ['总销售额', '访问量', '支付总量', '收藏量'],
                "current|0-2000": 100,
                "total|100-999999": 200
            }
        ]
    }))
})
/**
 * 产品删除
 */
router.get("/backend/item/deleteItemById",(req, res)=>{
    var id = req.query.id;
    const sql = "delete from goodslist where id = ?"
    const a = [id];
    sqlFn(sql,a,result=>{
        if(result.affectedRows>0){
            res.send({
                status:200,
                msg:"删除成功"
            })
        }
        else{
            res.send({
                status:500,
                msg:"删除失败"
            })
        }
    })
})

/**
 * 用户登录
 */
router.post('/login', (req, res) => {
    let {username,password} = req.body
    //请求数据库
    let sql = "select * from userinfo where username=? and password=?";
    let arr = [username, password]
    sqlFn(sql, arr, result => {
        if (result.length > 0) {
            let token = jwt.sign({
                username: result[0].username,
                id: result[0].id
            }, config.jwtSecert, {
                expiresIn: 20 * 1
            })
            res.send({
                status: 200,
                data: token
            })
        } else {
            res.send({
                status: 404,
                msg: '信息错误'
            })
        }

    })
})

//=====订单接口模拟==================================================
/**
 * 订单列表
 */
 var MockRandom = Mock.Random;
 var pageCount = MockRandom.integer(1, 10);//7
 var haseMore = true;//是否还有更多数据  true有数据  false无更多数据 结束分页展示
 var ids = 100;//自增长id
 var result = {};//数据模板
 
 router.get('/order-list', (req, res) => {
     var currPage = parseInt(req.query.currPage || 1);//页码
     ids = currPage * 100;
     if (currPage === pageCount) {
         haseMore = false;
         result = {
             'hasMore': false,
             'totalPage': pageCount,
             "list|1-10": [//最后一页的数据在1-10的区间产生
                 {
                     'id|+1': ids,
                     "title": '@cword(3,20)',//随机汉字,
                     "address":'@province()/@city()/@county()',
                     "num|1-100": 1,
                     "user": {
                         "avator": MockRandom.image('200x100', '#4A7BF7'),//图片大小
                         "name": "@cname",
                         "isvip": "@integer(0,1)",
                         "level": "@integer(0,20)"
                     },
                     "created": "@date('yyyy-MM-dd-HH-mm-ss')",//日期
                     'time': MockRandom.now('yyyy-MM-dd')
                 }
             ]
         }
     }else{
         result = {
             'hasMore': true,
             'totalPage': pageCount,
             "list|10": [//有分页的时候一页10条数据
                 {
                     'id|+1': ids,
                     "title": '@cword(3,20)',//随机汉字,
                     "address":'@province()/@city()/@county()',
                     "num|1-100": 1,
                     "user": {
                         "avator": MockRandom.image('200x100', '#4A7BF7'),//图片大小
                         "name": "@cname",
                         "isvip": "@integer(0,1)",
                         "level": "@integer(0,20)"
                     },
                     "created": "@date('yyyy-MM-dd-HH-mm-ss')",//日期
                     'time': MockRandom.now('yyyy-MM-dd')
                 }
             ]   
     }
     }
     //返回数据
     let mockData = Mock.mock(result);
     if(pageCount>=currPage){
         res.send({
             status: 200,
             data: mockData,
             total:pageCount
           });
     }else{
         res.send({
             status: 403,
             data: [],
           });
     }
 })
 




module.exports = router