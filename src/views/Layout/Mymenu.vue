<template>
  <div>
    <!-- background-color="#1b3554" -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      
      background-color="#15191d"
      text-color=" #fff"
      active-text-color=" #8c8e8e"
      router
      :collapse="isCollapse"
    >
      <el-menu-item>
        <span slot="title">麦旋风电子公司</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-document"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>

      <el-menu-item index="/params">
        <i class="el-icon-document"></i>
        <span slot="title">提供服务</span>
      </el-menu-item>

      <el-menu-item index="/server">
        <i class="el-icon-document"></i>
        <span slot="title">具体事项</span>
      </el-menu-item>
    
      <el-menu-item index="/advert">
        <i class="el-icon-setting"></i>
        <span slot="title">关于我们</span>
      </el-menu-item>

      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/order-list">
            <i class="el-icon-setting"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <el-menu-item index="/order/order-back">
            <i class="el-icon-setting"></i>
            <span slot="title">百度地图</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      // isCollapse:false
    };
  },
};
</script>

<style lang='less' scoped>
.el-menu {
  border-right: 0;
  .is-active {
    background:  #8c8e8e !important;
    color: #fff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>