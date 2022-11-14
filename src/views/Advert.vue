<template>
    <div id="HomePage">
      <!-- 轮播图 -->
      <div id="swiper" class="container-fuild">
        <div class="swiper-container banner-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
              <img class="swiper-lazy" :data-src="item.img" alt="轮播图">
              <div class="swiper-lazy-preloader"></div>
              <div class="swiper-slide-title">
                  <h1>{{item.title}}</h1>
                  <p>{{item.content}}</p>
              </div>
            </div>
          </div>
  
          <div class="swiper-pagination"></div>
  
       
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <!-- Tessai资管系统 -->
      <div id="bigData" class="container-fuild">
        <div class="row bigData-container">
          <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
            <img class="img-responsive" src="@/assets/img/img1.png" alt="Tessai资管系统">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <h2 class="bigData-title">
              Tessai资管系统
              <small>/ Tessai Management System</small>
            </h2>
            <p>智能化办公，提升效率；流程人性化。监管数据可模块化填报；只能一键式全市场下单交易，后台自动跑批数据。</p>
            <p>我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员。</p>
            <h2 class="bigData-device">PC &nbsp; Windows系统支持</h2>
            <a href="#" class="btn btn-lg btn-block btn-info">联系我们</a>
          </div>
        </div>
      </div>
      <!-- 您身边的IT专家 -->
      <div id="contactUs" class="container-fuild text-center">
        <div class="container contactUs-container wow slideInUp">
          <h1>您身边的IT专家</h1>
          <h3>7x24小时提供出色的IT服务</h3>
          <button
            class="btn btn-default btn-sm"
            onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
            onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
            @click="navToContactPage"
          >联系我们</button>
          <div class="contactUs-contactWay">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <!-- 客户评价 -->
      <div id="customer" class="container-fuild">
        <div class="container customer-container">
          <p class="customer-title text-center">客户评价</p>
          <!-- 电脑端客户评价 -->
          <div class="swiper-container customer-swiper hidden-xs">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide customer-block"
                v-for="(item,index) in customerList"
                :key="index"
              >
                <div class="customer-logo">
                  <img class="center-block" :src="item.logo" alt="logo">
                </div>
                <div class="customer-yh">
                  <img src="@/assets/img/yinhao_left.png" alt="引号">
                </div>
                <div class="customer-content1">
                  <small>{{item.content}}</small>
                </div>
                <div class="customer-content2">{{item.title}}</div>
              </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <!-- 手机端客户评价 -->
          <div class="row visible-xs customer-block">
            <div class="col-xs-12" v-for="(item,index) in customerList" :key="index">
              <div class="customer-logo">
                <img class="center-block" :src="item.logo" alt="logo">
              </div>
              <div class="customer-yh">
                <img src="@/assets/img/yinhao_left.png" alt="引号">
              </div>
              <div class="customer-content1">
                <small>{{item.content}}</small>
              </div>
              <div class="customer-content2">
                <small>{{item.title}}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 为什么选择我们 -->
      <div id="whyChooseUs" class="conatiner-fuild">
        <div class="container">
          <div class="whyChooseUs-title text-center">
            <p>为什么选择我们的服务</p>
            <p>THE REASON TO CHOOSING US</p>
          </div>
          <div class="row">
            <div
              class="col-xs-12 col-sm-6 col-md-3 server-wrapper"
              v-for="(item,index) in serverList"
              :key="index"
            >
              <div
                class="server-block wow slideInUp"
                onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
                onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
              >
                <img class="center-block" :src="item.logo" alt="logo">
                <p class="text-center">{{item.title}}</p>
                <div
                  class="text-center"
                  v-html="item.content"
                  onmouseenter="this.style.color='#28f'"
                  onmouseleave="this.style.color='#ccc'"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import Swiper from "swiper";
  import { WOW } from 'wowjs';


  export default {
    name: "HomePage",
    data() {
      return {
        swiperList: [
          {
            img: require("@/assets/img/banner1.png"),
            path: "",
            title: '商务协调团队',
            content: '协助银行、信托交易所、证券交易客户方案选型，梳理客户需求等工作',
          },
          {
            img: require("@/assets/img/banner2.jpg"),
            path: "",
            title: '售后服务团队',
            content: '受理用户的系统建设，以现场+远程的方式进行服务，负责跟进客户系统使用情况',
          },
          {
            img: require("@/assets/img/banner1.png"),
            path: "",
            title: '培训讲师团队',
            content: '以现场、远程等方式完成系统操作培训，收集用户使用反馈',
          },
          {
            img: require("@/assets/img/banner2.jpg"),
            path: "",
            title: '系统开发团队',
            content: '对客户需求进行持续响应，保证系统满足用户业务动态发展的需要',
          }
        ],
        customerList: [
          {
            logo: require("@/assets/img/logo_hp.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          },
          {
            logo: require("@/assets/img/logo_kk.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          },
          {
            logo: require("@/assets/img/logo_toyota.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          },
          {
            logo: require("@/assets/img/logo_kk.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          },
          {
            logo: require("@/assets/img/logo_hp.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          },
          {
            logo: require("@/assets/img/logo_toyota.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          },
          {
            logo: require("@/assets/img/logo_kk.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          },
          {
            logo: require("@/assets/img/logo_hp.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          },
          {
            logo: require("@/assets/img/logo_toyota.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          },
          {
            logo: require("@/assets/img/logo_hp.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          },
          {
            logo: require("@/assets/img/logo_kk.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          },
          {
            logo: require("@/assets/img/logo_hp.png"),
            title:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
            content:
              "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
          }
        ],
        serverList: [
          {
            logo: require("@/assets/img/tel.png"),
            title: "核心优势1",
            content: "<p>由专业客服提供人工服务</p>负责疑难问题和故障受理"
          },
          {
            logo: require("@/assets/img/computer.png"),
            title: "核心优势2",
            content: "<p>利用远程视频工具</p>帮助客户进行调试"
          },
          {
            logo: require("@/assets/img/qq.png"),
            title: "核心优势3",
            content: "<p>利用企业QQ在线解答</p>帮助企业解决问题"
          },
          {
            logo: require("@/assets/img/skill.png"),
            title: "核心优势4",
            content: "<p>由技术支持工程师负责</p>需求受理及故障受理"
          }
        ]
      };
    },
    mounted() {
      /* banner-swiper */
      new Swiper(".banner-swiper", {
        loop: true, // 循环模式选项
        effect: 'fade',
        //自动播放
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // 延迟加载
        lazy: {
          loadPrevNext: true
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
      /* customer-swiper */
      new Swiper(".customer-swiper", {
        loop: true, // 循环模式选项
        slidesPerView: 3,
        //自动播放
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
      /* wowjs动画 */
      var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
      })
      wow.init();
    },
    methods: {
      /** 前往联系我们页面 */
      navToContactPage() {
      }
    }
  };
  </script>
  <style scoped>
  /* 整体盒子 */
  #HomePage {
    width: 100%;
  }
  
  /* 轮播图 */
  #swiper {
    height: 600px;
  }
  #swiper .banner-swiper {
    width: 100%;
    height: 100%;
  }
  #swiper .banner-swiper .swiper-slide img {
    width: 100%;
    height: 100%;
  }
  #swiper .banner-swiper .swiper-slide{
    position: relative;
  }
  #swiper .banner-swiper .swiper-slide-title {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    color: #fff;
    background: rgba(51, 51, 51, 0.534);
    text-align: center;
    line-height: 80px;
  }
  #swiper .banner-swiper .swiper-slide-title > h1{
    font-size: 50px;
    margin-top: 12%;
  }
  #swiper .banner-swiper .swiper-slide-title > p{
    font-size: 20px;
    margin-top: 1%;
    font-weight: 700;
  }
  /* 大数据管理系统 */
  #bigData {
    padding: 100px;
    transition: all ease 0.6s;
    box-sizing: border-box;
  }
  #bigData .bigData-title {
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  #bigData p {
    font-size: 14px;
    color: #333;
    line-height: 2rem;
  }
  #bigData .bigData-device {
    margin: 50px 0 20px;
  }
  
  /* 您身边的IT专家 */
  #contactUs {
    color: #fff;
    height: 400px;
    background: url("../assets/img/contact_us_bg.jpg") 0 0 no-repeat;
    background-size: 100% 100%;
    transition: all ease 0.6s;
  }
  #contactUs .contactUs-container {
    padding-top: 50px;
  }
  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 40px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 48px;
    height: 48px;
    margin: 30px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
    background: url("../assets/img/weixin.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }
  #contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
    background: url("../assets/img/weibo.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }
  #contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
    background: url("../assets/img/twitter.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }
  
  /* 客户评价 */
  #customer {
    padding: 50px 0;
    box-sizing: border-box;
    background: #efefef;
    transition: all ease 0.6s;
  }
  #customer .customer-title {
    font-size: 30px;
    color: rgb(102, 102, 102);
    margin: 0 0 30px;
  }
  #customer .customer-block {
    background: #fff;
    padding: 30px;
  }
  #customer .customer-logo img {
    width: 94px;
    height: 94px;
    border: 1px solid #ccc;
  }
  #customer .customer-yh img {
    width: 34px;
    height: 34px;
  }
  #customer .customer-content1 {
    padding-bottom: 20px;
    border-bottom: 1px solid #0ce9f1;
  }
  #customer .customer-content2 {
    padding-top: 20px;
  }
  /* 为什么选择我们 */
  #whyChooseUs {
    padding: 100px;
  }
  #whyChooseUs .whyChooseUs-title {
    margin-bottom: 50px;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 25px;
    font-weight: 500;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 14px;
  }
  #whyChooseUs .server-block {
    padding: 50px 20px;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }
  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }
  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }
  #whyChooseUs .server-block > div {
    color: #ccc;
  }
  

  </style>
  
  