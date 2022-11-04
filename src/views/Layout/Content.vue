<template>
  <div>
    <div class="header">
        <i v-if='!isCollapse' @click="changeMenu" class="iconfont icon-right-indent"></i>
        <i v-else @click="changeMenu" class="iconfont icon-left-indent"></i>
        <div class="header-right">
          <el-dropdown @command="clicklanguage">
            <span class="el-dropdown-link" style="color: #fff">
              切换语言<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh">中文</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <!-- <div class="user">
            <span> 欢迎您</span>
            <i class="iconfont icon-tuichu" @click="loginout"></i>
          </div> -->
        </div>
    </div>
     <!-- 内容区域---路由出口 -->
     <div class="content">
       <router-view/>
     </div>
  </div>
</template>

<script>
export default {
  props:['isCollapse'],
  methods:{
    changeMenu(){
        //点击切换按钮的时候 修改父组件的数据   isCollapse
        this.$emit('changeCollapse')
    },
    //切换语言
    clicklanguage(command){
      console.log(command);
      this.$i18n.locale = command;
    },
  }
}
</script>

<style lang='less' scoped>
.header{
  height: 50px;
  line-height: 50px;
  color: #fff;
  background: #1e78bf;
  .iconfont{
    font-size: 24px;
  }
}
.header-right {
  float: right;
  padding-right: 20px;
  display: flex;
  .user {
    margin-left: 20px;
    span {
      position: relative;
      top: -4px;
      margin-right: 10px;
    }
  }
}
</style>