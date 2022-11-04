<template>
  <div>
      <div class="login">
        <h3 class="title">登录界面</h3>
        <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="60px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        info:'',
        loginForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { validator: validateUser, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log("校验通过",this.loginForm);
          } else {
            console.log("校验失败");
            return false;
          }
        });
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style>
.login {
  width: 400px;
  height: 260px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 180px;
  border-radius: 10px;

  border: 1px solid #eee;
  background: #fff;
  position: relative;
}
.title{
  margin-bottom: 30px;
  text-align: center;
  color: #666;
}
</style>