const express = require('express')
const router = express.Router()
//导入数据库 sqlFn('sql',[],res=>{})
const sqlFn = require('./mysql')

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
        const sql = "select * from goodslist  limit 8 offset " + (page - 1) * 8;
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





module.exports = router