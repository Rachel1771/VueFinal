<template>
    <div class="add-goods">
      <!-- 导航栏 -->
      <div class="name">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/goods' }">产品管理</el-breadcrumb-item>
          <el-breadcrumb-item>添加产品</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 表单数据 -->
      <div class="addform">
        <el-form
          :model="goodsForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <!-- <el-form-item label="类目选择" prop="description">
            <el-button type="primary">类目选择</el-button>
          </el-form-item> -->
  
          <el-form-item label="产品名称" prop="name">
            <el-input v-model="goodsForm.name"></el-input>
          </el-form-item>
          <el-form-item label="产品价格" prop="price">
            <el-input v-model="goodsForm.price"></el-input>
          </el-form-item>
          <el-form-item label="产品数量" prop="num">
            <el-input v-model="goodsForm.num"></el-input>
          </el-form-item>
          <!-- <el-form-item label="发布时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="goodsForm.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="goodsForm.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item> -->
          <el-form-item label="产品定位" prop="position">
            <el-input v-model="goodsForm.position"></el-input>
          </el-form-item>
          <el-form-item label="产品图片" prop="image">
            <el-button type="primary">上传图片</el-button>
          </el-form-item>
          <el-form-item label="产品受众" prop="audience">
            <el-input v-model="goodsForm.audience"></el-input>
          </el-form-item>
          <el-form-item label="产品描述" prop="description">
            <WangEditor ref="myEditor" @sendEditor="sendEditor" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
  <script>
  import WangEditor from "./WangEditor.vue";

  export default {
    props: {

      components: {
      TreeGoods,
      UploadImg,
      WangEditor,
      },
    },
    data() {
      return {
        goodsForm: {
          //表单对应容器数据
          name: "",       //名称
          price: "",      //价格
          num: "",        //仓库数量
          position: "",   //产品定位
          image: "",      //图片
          audience: "",   //产品受众
          description: "", //产品类目
          // date1: "", //产品时间
          // date2: "", //产品时间
        },
        rules: {
          //校验规则
          name: [
            { required: true, message: "请输入产品名称", trigger: "blur" },
            { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
          ],
          price: [{ required: true, message: "请输入价格", trigger: "blur" }],
          num: [{ required: true, message: "请输入数量", trigger: "blur" }],
        },
      };
    },
    //监听器---------
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


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
  };
  </script>
  
  <style lang='less' scoped>
  .add-goods {
    margin: 20px;
  }
  .name {
    padding: 10px;
    background: #fff;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .addform {
    background: #fff;
    padding: 10px;
    padding-right: 30px;
  }
  .line{
      text-align: center;
  }
  </style>