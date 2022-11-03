/**
 * 请求的方法
 */

import axios from 'axios'
import base from './base'

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
}

export default api
