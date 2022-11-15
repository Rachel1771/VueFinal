<template>
    <div id="footer" class="container-fluid">
      <p class="title">{{config.name}}</p>
      <p class="address_tel_fax">
        <span>地址：{{config.address}}    </span>
        <span>电话：{{config.phone}}</span>
      </p>
      <p class="email_wx">
        <span>邮箱：{{config.email}}</span>
        <br>
        <span>微信：{{config.wechat}}</span>
        <br>
        <span>Github：{{config.Github}}</span>
      </p>
      <p class="copy">From &copy; 2000300309陈乐 </p>
    </div>
  </template>
  <script>
  import config from '@/config'
  export default {
    name: "Tail",
    data() {
      return {
        config: config
      };
    }
  };
  </script>
  <style scoped>
  #footer {
    width: 100%;
    height: 100%;
    color: #fff;
    background: #15191d;
    overflow: hidden;
    text-align: center;
  }
  .logo {
    width: 95px;
    height: 45px;
    margin: 50px auto 20px;
  }
  .title {
    font-size: 25px;
    margin-bottom: 20px;
    /* margin: 50px auto 20px; */
  }
  .address_tel_fax {
    color: #d3d3d3;
    font-size: 14px;
    margin: 10px 0;
  }
  .email_wx {
    color: #d3d3d3;
    font-size: 14px;
  }
  .copy {
    color: #d3d3d3;
    font-size: 14px;
    margin: 50px 0 10px;
  }
  @media screen and (max-width: 997px) {
    .title {
      font-size: 20px;
    }
    .address_tel_fax {
      font-size: 12px;
    }
    .email_wx {
  
    font-size: 12px;
  }
  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
  }
  </style>
  
  