<template>
    <!-- 设置居中 -->
 <div style="text-align:center;margin:20px;">   
    <el-pagination ref="pagination" background layout="total,prev, pager, next,jumper" 
    :total="total"  :page-size="pageSize" @current-change="changePage">
  </el-pagination>
 </div>
</template>

<script>
export default {
    props:{
        total:{
            type:Number,
            default:100
        },
        pageSize:{
            type:Number,
            default:10
        }
    },
    methods:{
        changePage(page){
            this.$emit('changePage',page)
        }
    }
};
</script>

<style>
</style>