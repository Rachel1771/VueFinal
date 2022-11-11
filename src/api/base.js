/**
 * 接口路径配置：
 * 一般文件目录：base.js  index.js 
 * 但是公司不一定
 *      config
 *          login  index.js config.js 
 *       index.js 
 *       xxxx.js 
 */

const base ={
    goodsList:'/api/api/projectList', //商品列表
    search:'/api/api/search',    //商品的搜索功能
    addGoods:'/api/api/backend/item/insertTbItem',//添加商品
    deleteGoods:'api/api/backend/item/deleteItemById',//删除产品
    login:'api/api/login',//登录接口
    statistical:'/api/api/statistical',//统计数据
    sellTotal:"/api/api/sellTotal",//统计数据
    orderList:"/api/api/order-list",//订单列表
    

}

export default base;
