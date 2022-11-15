<template>
    <div id="ServiceDetail">
      <div class="banner container-fuild text-center">技术简介</div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
            <!-- <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
              <p>特色服务</p>
              <li
                :class="item.id==id?'active':''"
                v-for="(item,index) in serviceNavList"
                :key="index"
              >
                <a :href="'#'+item.id">{{item.title}}</a>
              </li>
            </ul> -->
          </div>
          <div class="col-xs-12 col-sm-12 col-md-9 content  wow zoomIn">
            <div class="content-block" v-for="(item,index) in serviceContentList" :key="index">
              <h2 :id="item.id">
                {{item.title}}
                <small>/ {{item.eng_title}}</small>
              </h2>
              <div v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { WOW } from "wowjs";
  export default {
    name: "ServiceDetail",
    data() {
      return {
        id: "section-1",
        serviceNavList: [
          {
            id: "section-1",
            title: "Go"
          },
          {
            id: "section-2",
            title: "K8s"
          },
          {
            id: "section-3",
            title: "Docker"
          },
          {
            id: "section-4",
            title: "Istio"
          }
        ],
        serviceContentList: [
          {
            id: "section-1",
            title: "Go",
            eng_title: "Language",
            content:
              "<h3>计算机编程语言</h3><p>Go（又称Golang）是Google开发的一种静态强类型、编译型、并发型，并具有垃圾回收功能的编程语言。罗伯特·格瑞史莫（Robert Griesemer），罗布·派克（Rob Pike）及肯·汤普逊（Ken Thompson）于2007年9月开始设计Go，稍后Ian Lance Taylor、Russ Cox加入项目。Go是基于Inferno操作系统所开发的。Go于2009年11月正式宣布推出，成为开放源代码项目，并在Linux及Mac OS X平台上进行了实现，后来追加了Windows系统下的实现。在2016年，Go被软件评价公司TIOBE 选为“TIOBE 2016 年最佳语言”。 目前，Go每半年发布一个二级版本（即从a.x升级到a.y）。</p><h3>语言特性</h3><p>o 语言的推出，旨在不损失应用程序性能的情况下降低代码的复杂性，具有 “部署简单、并发性好、语言设计良好、执行性能好” 等优势，目前国内诸多 IT 公司均已采用 Go 语言开发项目。Go 语言有时候被描述为 “C 类似语言”，或者是 “21 世纪的 C 语言”。Go 语言从 C 语言继承了相似的表达式语法、控制流结构、基础数据类型、调用参数传值、指针等很多思想，还有 C 语言一直所看中的编译后机器码的运行效率以及和现有操作系统的无缝适配因为 Golang 没有类和继承的概念，所以它和 Java 或 C++ 看起来并不相同。但是它通过接口（interface）的概念来实现多态性。Go 语言有一个清晰易懂的轻量级类型系统，在类型之间也没有层级之说。因此可以说 Go 语言是一门混合型的语言。</p>"
          },
          {
            id: "section-2",
            title: 'K8s',
                    eng_title: 'Frame',
            content:
              "<h3>应用简介</h3><p>kubernetes，简称K8s，是用8代替名字中间的8个字符“ubernete”而成的缩写。是一个开源的，用于管理云平台中多个主机上的容器化的应用，Kubernetes的目标是让部署容器化的应用简单并且高效（powerful）,Kubernetes提供了应用部署，规划，更新，维护的一种机制。 传统的应用部署方式是通过插件或脚本来安装应用。这样做的缺点是应用的运行、配置、管理、所有生存周期将与当前操作系统绑定，这样做并不利于应用的升级更新/回滚等操作，当然也可以通过创建虚拟机的方式来实现某些功能，但是虚拟机非常重，并不利于可移植性。新的方式是通过部署容器方式实现，每个容器之间互相隔离，每个容器有自己的文件系统 ，容器之间进程不会相互影响，能区分计算资源。相对于虚拟机，容器能快速部署，由于容器与底层设施、机器文件系统解耦的，所以它能在不同云、不同版本操作系统间进行迁移。容器占用资源少、部署快，每个应用可以被打包成一个容器镜像，每个应用与容器间成一对一关系也使容器有更大优势，使用容器可以在build或release 的阶段，为应用创建容器镜像，因为每个应用不需要与其余的应用堆栈组合，也不依赖于生产环境基础结构，这使得从研发到测试、生产能提供一致环境。类似地，容器比虚拟机轻量、更“透明”，这更便于监控和管理。</p><h3>特性</h3><p>可移植: 支持公有云，私有云，混合云，多重云（multi-cloud）；可扩展: 模块化，插件化，可挂载，可组合；自动化: 自动部署，自动重启，自动复制，自动伸缩/扩展</p>"
          },
          {
            id: "section-3",
            title: 'Docker',
            eng_title: 'Container',
            content:
              "<h3>应用容器引擎</h3><p>Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，然后发布到任何流行的 Linux或Windows操作系统的机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。</p><h3>特性</h3><p>构建标准化的运行环境，现有的方案大多是在一个baseOS上运行一套puppet/chef，或者一个image文件，其缺点是前者需要base OS许多前提条件，后者几乎不可以修改(因为copy on write 的文件格式在运行时rootfs是read only的)。并且后者文件体积大，环境管理和版本控制本身也是一个问题。PaaS环境是不言而喻的，其设计之初和dotcloud的案例都是将其作为PaaS产品的环境基础因为其标准化构建方法(buildfile)和良好的REST API，自动化测试和持续集成/部署能够很好的集成进来因为LXC轻量级的特点，其启动快，而且docker能够只加载每个container变化的部分，这样资源占用小，能够在单机环境下与KVM之类的虚拟化方案相比能够更加快速和占用更少资源</p>"
          },
          {
            id: "section-4",
            title: 'Istio',
            eng_title: 'Microservice',
            content:
              "<h3>开放式技术</h3><p>作为服务网格的实现产品，Istio一经推出就备受瞩目，成为各大厂商和开发者争相追逐的“香馍馍”。我个人认为Istio会成为继Kubernetes之后的又一个明星级产品。Istio的官方网站这样定义自己。它是一个完全开源的服务网格，以透明层的方式构建在现有分布式应用中。它也是一个提供了各种API的平台，可以与任何日志平台、监控系统或策略系统集成。Istio的多样化特性可以让你高效地运行分布式微服务架构，并提供一种统一的方式来保护、连接和监控微服务。从上面的定义中可以了解到，Istio为微服务应用提供了一个完整的解决方案，可以以统一的方式去检测和管理微服务。同时，它还提供了管理流量、实施访问策略、收集数据等功能，而所有这些功能都对业务代码透明，即不需要修改业务代码就能实现。有了Istio，就几乎可以不需要其他的微服务框架，也不需要自己去实现服务治理等功能，只要把网络层委托给Istio，它就能帮助完成这一系列的功能。简单来说，Istio就是一个提供了服务治理能力的服务网格。</p><h3>优点特性</h3><p>服务网格的主要优势包括能够改善调试、监控、路由、安全和利用能力。 也就是说，利用 Istio，只需更少的工作即可管理更广泛的服务。改善的调试过程、监测和观测能力、策略、路由和负载均衡、回路中断、安全、简化了管理。</p>"
          }
        ]
      };
    },
    mounted() {
      this.id = this.$route.params.id;
      var top = document.getElementById(this.id).offsetTop;
      $(window).scrollTop(top + 300);
      $("#myNav").affix({
        offset: {
          top: 300
        }
      });
      var wow = new WOW();
      wow.init();
    }
  };
  </script>
  <style scoped>
  .banner {
    color: #fff;
    font-size: 30px;
    height: 150px;
    line-height: 150px;
    background-image: url("../assets/img/IT.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
  }
  ul.nav-tabs {
    text-align: center;
    width: 140px;
    margin-top: 40px;
    border-radius: 4px;
    background: rgb(255, 255, 255);
    z-index: 99999;
    border: 5px solid #131111;
    box-shadow: 0 1px 16px rgba(240, 237, 237, 0.067);
  }
  ul.nav-tabs li {
    text-align: center;
    margin: 0;
    border-top: 1px solid #7b2121;
  }
  ul.nav-tabs p {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    background: #a82c2c;
    margin: 0;
    padding: 10px 29px;
  }
  ul.nav-tabs li:first-child {
    border-top: none;
  }
  ul.nav-tabs li a {
    margin: 0;
    padding: 8px 16px;
    border-radius: 0;
  }
  ul.nav-tabs li.active a,
  ul.nav-tabs li.active a:hover {
    color: #fff;
    background: #d5c5c5;
    border: 1px solid #924242;
  }
  ul.nav-tabs li:first-child a {
    border-radius: 4px 4px 0 0;
  }
  ul.nav-tabs li:last-child a {
    border-radius: 0 0 4px 4px;
  }
  ul.nav-tabs.affix {
    top: 30px;
  }



  .content-block {
    margin: 50px 0;
  }
  .content-block > h2 {
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
  }
  </style>
  