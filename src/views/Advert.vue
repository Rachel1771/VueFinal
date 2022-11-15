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
      
      <!-- K8s -->
      <div id="bigData" class="container-fuild">
        <div class="row bigData-container">
          <div class="col-xs-12 col-sm-7 col-md-6.6 wow zoomIn">
            <img class="img-responsive" src="@/assets/img/img1.png" alt="Tessai资管系统">
          </div>
          <div class="col-xs-12 col-sm-7 col-md-5">
            <h2 class="bigData-title">
              Kubernetes 也称为 K8s，是用于自动部署、扩缩和管理容器化应用程序的开源系统。
              <!-- <small>/ Tessai Management System</small> -->
            </h2>
            <p>它将组成应用程序的容器组合成逻辑单元，以便于管理和服务发现。Kubernetes 源自Google 15 年生产环境的运维经验，同时凝聚了社区的最佳创意和实践。</p>
            <!-- <p>我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员。</p> -->
            <p>Google 每周运行数十亿个容器，Kubernetes 基于与之相同的原则来设计，能够在不扩张运维团队的情况下进行规模扩展。</p>
            <p>无论是本地测试，还是跨国公司，Kubernetes 的灵活性都能让你在应对复杂系统时得心应手。</p>
            <p>Kubernetes 是开源系统，可以自由地部署在企业内部，私有云、混合云或公有云，让您轻松地做出合适的选择。</p>
            <h2 class="bigData-device">本项目 </h2>
            <!-- &nbsp; Windows系统支持 -->
            <p>本项目为2000300309陈乐在大三上册前端课程上的课程大作业，基于Vue、axios、JavaScript、CSS、H5等技术栈设计的电子公司项目。</p>
            <P>实现了利用element-ui实现基本组件交互，mock实现数据动态模拟，echarts完成数据表格设计，同时自己设计了API实现了后台数据的管理。</P>
            <h2 class="bigData-device">PC</h2>
            <a href="https://github.com/Rachel1771/VueFinal.git" class="btn btn-lg btn-block btn-info">加入我们</a>
          </div>
        </div>
      </div>
      <!-- 您身边的IT专家 -->
      <div id="contactUs" class="container-fuild text-center">
        <div class="container contactUs-container wow slideInUp">
          <h1>优秀出色的服务</h1>
          <h3>全天候在线为您服务</h3>
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

        </div>
      </div>
      <!--  关于作者-->
      <div id="whyChooseUs" class="conatiner-fuild">
        <div class="container">
          <div class="whyChooseUs-title text-center">
            <p>关于作者</p>
            <p>About the author</p>
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
            img: require("@/assets/img/ban1.jpg"),
            path: "",
            title: '销售团队',
            content: '多年的销售经验，精通我们的直线产品以及对各产品以及周边产品有足够的了解，给你最合适的推荐',
          },
          {
            img: require("@/assets/img/ban2.jpg"),
            path: "",
            title: '开发团队',
            content: '开发团队由来自世界各地的技术人员组成，有足够强硬的技术，持续进行整体的开发',
          },
          {
            img: require("@/assets/img/ban5.jpg"),
            path: "",
            title: '售后团队',
            content: '本公司有着完善的售后链，提供优质的保修和维护等后续的免费服务，致力于给每个客户提供最好的',
          },
          {
            img: require("@/assets/img/ban3.jpg"),
            path: "",
            title: '管理团队',
            content: '公司的管理模式采用实现集成化管理与决策信息系统的理论基础的管理模式，团队有较高的凝聚力',
          }
        ],
        customerList: [
          {
            logo: require("@/assets/img/联通.png"),
            title:
              "欢迎进一步了解",
            content:
              "Kubernetes is a great platform for machine learning because it comes with all the scheduling and ,Kubernetes is a great platform for machine learning because it comes with all the scheduling and"
          },
          {
            logo: require("@/assets/img/移动.png"),
            title:
              "欢迎进一步了解",
            content:
              "Kubernetes has improved our experience using cloud infrastructure. Kubernetes has improved our experience using cloud infrastructure. There is currently no alternative"
          },
          {
            logo: require("@/assets/img/宝马.png"),
            title:
              "欢迎进一步了解",
            content:
              "Kubernetes is a great solution for us. It allows us to rapidly iterate on our clients' demands,Kubernetes is a great solution for us. It allows us to rapidly iterate on our clients' demands"
          },
          {
            logo: require("@/assets/img/谷歌.png"),
            title:
              "欢迎进一步了解",
            content:
              "We realized that we needed to learn Kubernetes better in order to fully use the potential of it,We realized that we needed to learn Kubernetes better in order to fully use the potential of it."
          },
          {
            logo: require("@/assets/img/腾讯云.png"),
            title:
              "欢迎进一步了解",
            content:
              "We realized that we needed to learn Kubernetes better in order to fully use the potential of it,We realized that we needed to learn Kubernetes better in order to fully use the potential of it."
          },
          {
            logo: require("@/assets/img/微软1.png"),
            title:
              "欢迎进一步了解",
            content:
              "We realized that we needed to learn Kubernetes better in order to fully use the potential of it,We realized that we needed to learn Kubernetes better in order to fully use the potential of it."
          },
          
        ],
        serverList: [
          {
            logo: require("@/assets/img/github.png"),
            title: "GitHub",
            content: "<p>优质的代码开源平台</p>在这里能找到更多喜欢的",
          },
          {
            logo: require("@/assets/img/QQ.png"),
            title: "QQ",
            content: "<p>现代规模最大的社交软件</p>促进你我之间的距离"
          },
          {
            logo: require("@/assets/img/网易云音乐.png"),
            title: "网易云",
            content: "<p>优秀的音乐播放平台</p>发现你爱听的音乐"
          },
          {
            logo: require("@/assets/img/csdn.png"),
            title: "CSDN",
            content: "<p>技术人员交流社区</p>分享你的技术"
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
    color: rgb(233, 240, 245);
    height: 400px;
    background: url("../assets/img/IT.png") 0 0 no-repeat;
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
  
  