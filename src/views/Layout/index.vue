<template>
  <div class="layout">
      <!-- 左侧导航区域 -->
      <MyMenu class="menu" :isCollapse='isCollapse'/>
      <!-- 右侧内容区域 -->
      <Content class="content" :class="{isActive:isCollapse}" @changeCollapse='changeCollapse' :isCollapse='isCollapse'/>
  </div>
</template>

<script>
import MyMenu from './Mymenu.vue'
import Content from './Content.vue'
export default {
    components:{
        MyMenu,
        Content
    },
    data(){
        return {
            isCollapse:false,
        }
    },
    methods:{
        changeCollapse(){
            this.isCollapse = !this.isCollapse;
        }
    }
}
</script>

<style lang='less' scoped>
    .layout{
        .menu{
            /* // width: 200px; */
            /* // min-height: 500px; */
            background: #15191d;
            position: fixed;
            top:0;
            bottom:0;
        }
        .content{
            margin-left: 200px;
            transition: all 0.3s;
        }
        .isActive{
            /* background-color:  #8c8e8e; */
            margin-left: 64px;
        }
    }

</style>