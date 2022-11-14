/**
 * 请求的方法
 */

import axios from 'axios'
import base from './base'
const qs = require('querystring')
// // axios 配置接口默认路径 
// axios.defaults.baseURL = 'https://www.bookbook.cc/api/data-view' // 使用接口数据 可把后端仓库拉下来 改成 http://127.0.0.1:8801/api
// Vue.prototype.$http = axios

const api ={
    /**
     * 商品列表
     */
    getGoodsList(params){//{page:xx}
        return axios.get(base.goodsList,{
            params
        })
    },
    

    /**
     * 产品搜索
     */
    getSearch(params){
        return  axios.get(base.search,{params})
    },

     /**
      * 添加产品
      */
      addGoods(params){//={}
        return axios.get(base.addGoods,{
            params
        })
    },

    /**
      * 删除产品
      */
     deleteGoods(params){
        return axios.get(base.deleteGoods,{params})
    },

    /**
      * 登录接口
      */
     getLogin(params){
        return axios.post(base.login,qs.stringify(params))
     },


     /**
    * 统计数据
    */
    getStatistical() {
        return axios.get(base.statistical)
    },
    /**
     * 销量对比
     */
    getSellTotal() {
        return axios.get(base.sellTotal)
    },

    orderList(params){
        return axios.get(base.orderList,{params})
    },

}

export default api
