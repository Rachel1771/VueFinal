/**
 * 请求的方法
 */

import axios from 'axios'
import base from './base'
const qs = require('querystring')

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
<<<<<<< HEAD


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
=======
>>>>>>> c361435391daeec8f54e7b64e9a9a8e623adf7c4
}

export default api
