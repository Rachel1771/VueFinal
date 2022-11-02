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
    

}

export default base;
