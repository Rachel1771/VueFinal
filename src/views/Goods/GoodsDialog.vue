<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="clearForm"
    >
      <!-- 表单框内容 -->
      <el-form  :model="goodsForm" :rules="rules"  ref="ruleForm" label-width="100px"  class="demo-ruleForm">
        <el-form-item label="产品序号" prop="name">
          <el-input v-model="goodsForm.id"></el-input>
        </el-form-item>
        <el-form-item label="产品名称" prop="name">
          <el-input v-model="goodsForm.name"></el-input>
        </el-form-item>
        <el-form-item label="产品价格" prop="price">
          <el-input v-model="goodsForm.price"></el-input>
        </el-form-item>
        <el-form-item label="产品数量" prop="num">
          <el-input v-model="goodsForm.num"></el-input>
        </el-form-item>
        <el-form-item label="产品定位" prop="position">
          <el-input v-model="goodsForm.position"></el-input>
        </el-form-item>
        <el-form-item label="产品受众" prop="audience">
          <el-input v-model="goodsForm.audience"></el-input>
        </el-form-item>
        <el-form-item label="产品描述" prop="description">
          <WangEditor ref="myEditor" @sendEditor="sendEditor" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="clearForm">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 导包
import WangEditor from "./WangEditor.vue";
export default {
  props: {
    title: {
      type: String,
      default: "添加商品",
    },
    rowData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  components: {
    WangEditor,
  },
  data() {
    return {
      dialogVisible: false, 
      goodsForm: {
        // 容器对象
        id: "",
        name: "",       //名称
        price: "",      //价格
        num: "",        //仓库数量
        position: "",   //产品定位
        audience: "",   //产品受众
        description: "", //产品类目
      },
      rules: {
        //校验规则
        title: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
        price: [{ required: true, message: "请输入价格", trigger: "blur" }],
        num: [{ required: true, message: "请输入数量", trigger: "blur" }],
      },
    };
  },
  //监听数据变化,富文本编译
  watch: {
    rowData(val) {
      console.log("监听数据变化", val);
      this.goodsForm = val;
      //设置富文本编辑的数据内容
      this.$nextTick(() => {
        this.$refs.myEditor.editor.txt.html(val.descs);
      });
    },
  },
  methods: {
    /**
     * 接受wangeditor数据
     */
    sendEditor(val) {
      this.goodsForm.descs = val;
    },
   
   /**
     * 更新列表数据的内容
     */
    close() {
      this.$emit("changeDialog");
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log("获取输入的信息", this.goodsForm);
          //title cid  category sellPoint price num descs paramsInfo image
          let {
              id,
              name,
              price,
              num,
              position,
              audience,
              description,
            
          } = this.goodsForm;
          //判断当前的确定按钮类型：
          if (this.title === "添加商品") {
            console.log("添加商品");
            this.$api
              .addGoods({
                id,
                name,
                price,
                num,
                position,
                audience,
                description,
              })
              .then((res) => {
                console.log("添加---实现---", res.data);
                if (res.data.status === 200) {
                  //成功
                  this.$parent.getlist(1); //更新父组件列表数据
                  this.$message({
                    message: "恭喜你，添加商品成功",
                    type: "success",
                  });
                  //清空表单
                  this.clearForm();
                } else {
                  this.$message.error("错了哦，这是一条错误消息");
                }
              });
          } else {
            console.log("编辑商品");
            this.$api
              .updateGoods({
                id,
                name,
                price,
                num,
                position,
                audience,
                description,
              })
              .then((res) => {
                console.log(res.data);
                if (res.data.status === 200) {
                  this.$parent.getlist(1); //更新父组件列表数据
                  this.$message({
                    message: "恭喜你，修改商品成功",
                    type: "success",
                  });
                  //清空表单
                  this.clearForm();
                } else {
                  //修改失败了--
                }
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    /**
     * 清空表单数据列表
     */
    clearForm() {
      this.dialogVisible = false; //1.关闭弹框
      // 清空表单  1 使用element里面的重置表单  2 自己手动初始化goodsForm
      // this.$refs.ruleForm.resetFields();
      this.goodsForm = {
        id: "",         //键值
        name: "",       //名称
        price: "",      //价格
        num: "",        //仓库数量
        position: "",   //产品定位
        audience: "",   //产品受众
        description: "", //产品描述
      };
      //单独-清空编辑器内容--editor.txt.clear()
      this.$refs.myEditor.editor.txt.clear();
    },
  },
};
</script>

<style lang='less' scoped>
.line {
  text-align: center;
}
</style>