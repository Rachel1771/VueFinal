<template>
  <div class="goods">
    <!-- 1. 搜索区域 -->
    <div class="header">
      <el-input @change="searchInp" v-model="input" placeholder="请输入内容"></el-input>
      <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
      <el-button type="primary">查询</el-button>
      <el-button type="success">
        <router-link to="/add-goods" style="color: #fff">添加</router-link>
      </el-button>
      <el-button type="primary" @click="addGoods">弹框添加</el-button>
    </div>
    <!-- 2. 表格区域展示视图数据 -->
    <div class="wrapper">
      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="产品" width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="产品名称"
          width="100"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="price" label="产品价格" width="100">
        </el-table-column>
        <el-table-column prop="num" label="产品数量" width="100">
        </el-table-column>
        <el-table-column prop="position" label="产品定位" width="100">
        </el-table-column>
        <el-table-column prop="image" label="产品图片" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="audience" label="产品受众"show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="description" label="产品描述" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" width="280">
          <template slot-scope="scope">
            <el-button size="mini">查看</el-button>
            <el-button
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              icon="el-icon-edit"
            >
              编辑</el-button
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

    <!-- 3. 分页 -->
    <MyPagination
      :total="total"
      :pageSize="pageSize"
      @changePage="changePage"
    />
  </div>
</template>

<script>
import MyPagination from "../../components/MyPagination.vue";
export default {
  components: {
    MyPagination,
  },
  data() {
    return {
      input: "",
      tableData: [],
      total: 10,
      pageSize: 1,  
    };
  },
  methods: {
    /**
     * 分页页码--
     */
    changePage(page){
      this.getlist(page)
      this.getData();
      this.show=false;
      this.$nextTick(() => {//重新渲染分页
    		this.show = true;});
    },
    
    /**
     * 查询操作
     */
     searchInp(val) {
      if (!val) {
        this.http(1);
        this.currentPage = 1;
        this.type = 1;
        return;
      }
      this.$api
        .getSearch({
          search: val,
        })
        .then((res) => {
          console.log("搜索---", res.data);
          this.currentPage = 1;
          if (res.data.status === 200) {
            this.list = res.data.result; //获取的搜索的总数据条数---数据分割
            //假设需要分页---我们处理分页----
            this.total = res.data.result.length;
            this.pageSize = 3;
            this.tableData = res.data.result.slice(0, 3);
            this.type = 2;
            console.log("分页", this.currentPage);
          } else {
            this.tableData = [];
            this.total = 1;
            this.pageSize = 1;
            this.type = 1;
          }
        });
    },
    
    /**
     * 编辑操作
     */
    handleEdit() {},
    /**
     * 删除操作
     */
    handleDelete() {},
    /**
     * 产品列表获取
     */
    getlist(page) {
      this.$api
      .getGoodsList({
          page,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 200) {    //访问成功
            this.tableData = res.data.data; //获取的数据列表
            this.total = res.data.total;
            this.pageSize = res.data.pageSize;
          }
        });
    },
  },
  //生命周期函数
  created() {
    this.getlist(1)
    // this.$refs.pagination.lastEmittedPage = 1
  },
};
</script>

<style lang='less' scoped>
.goods {
  margin: 20px;
}
.header {
  display: flex;
  button{
    margin-left: 20px;
  }
}
.wrapper {
  margin: 20px 0;
}
</style>