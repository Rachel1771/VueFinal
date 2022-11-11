<template>
  <div class="container">
    <!-- 1. 目录位置 -->
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/order' }"
          >订单管理</el-breadcrumb-item
        >
        <el-breadcrumb-item>订单列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 2. 搜索区域 -->
    <div class="header">
      <!-- change	仅在输入框失去焦点或用户按下回车时触发 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="订单号">
          <el-input v-model="formInline.user" placeholder="订单号"></el-input>
        </el-form-item>
        <el-form-item label="商品区域">
          <el-select v-model="formInline.region" placeholder="商品区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button type="success">管理</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 3. 表格 -->
    <div class="order-list">
      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="title" label="商品名称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="num" label="购买数量" width="100">
        </el-table-column>
        <el-table-column prop="user.name" label="购买人" width="100">
        </el-table-column>
        <el-table-column prop="address" label="收获地址" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="time" label="购买日期"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-delete"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 4. 分页 -->
    <MyPagination :total="total" :pageSize="1" @changePage="changePage" />
  </div>
</template>

<script>
import MyPagination from "../../../components/MyPagination.vue";
export default {
  components: {
    MyPagination,
  },
  data() {
    return {
      input: "",
      formInline: {
        user: "",
        region: "",
      },
      tableData: [],
      total: 1,
      pageSize: 1,
    };
  },
  methods: {
    /**
     * 点击分页
     */
    changePage(num) {
      this.http(num);
    },
    /**
     * 编辑
     */
    handleEdit() {},
    /**
     * 删除
     */
    handleDelete() {},
    /**
     * 获取订单数据
     */
    http(currPage) {
      this.$api.orderList({ currPage }).then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalPage;
        } else {
          this.tableData = [];
          this.total = 1;
        }
      });
    },
  },
  created() {
    this.http(1);
  },
};
</script>

<style lang='less' scoped>
.container {
  margin: 10px;
}
.nav {
  padding: 10px;
}
.header {
  display: flex;
  background: #fff;
  padding: 10px;
  border: 1px solid #eee;
  button {
    margin-left: 20px;
  }
  .el-form-item {
    margin-bottom: 0;
  }
}
// 订单列表
.order-list {
  margin: 20px 0;
  padding: 16px;
  border: 1px solid #eee;
  background: #fff;
}
</style>