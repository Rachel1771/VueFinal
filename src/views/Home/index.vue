<template>
  <div class="home">

    <!-- <el-carousel indicator-position="outside" >
      <el-carousel-item v-for="item in firstimage" :key="item">
        <img :src="item.url"/>
      </el-carousel-item>
    </el-carousel> -->
    <!-- <div class="demo-image__placeholder">
      <div class="block">

        <el-image :src="imageurl"></el-image>
      </div>
    </div> -->

    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in imgdata" :key="item">
        <img :src="item.url" alt=""/>
      </el-carousel-item>
    </el-carousel>
    <div class="header">
      <div class="item" v-for="item in totalData" :key="item.id">
        {{ item.title }}
        <div class="num">{{ item.total }}</div>
        <div class="bottom">今日销售额: {{ item.current }}</div>
      </div>
    </div>

    <!-- 访问时长 -->
    <div class="content">
      <div class="time-info">
        <div class="title">经济占比</div>
        <div id="charts" style="width: 100%; height: 360px"></div>
      </div>
      <!-- <div class="area">地区分布</div> -->
      <!-- <div id="middle-bottom" :class="{ fullscreen: fullScreenStatus.rank }"> -->
        <!-- 地区销量排行图表 -->
      <div class="area">
        <!-- <Rank ref="rank"></Rank> -->
        <!-- <div class="resize">
          <span @click="changeSize('rank')" :class="['iconfont', fullScreenStatus.rank ? 'icon-compress-alt' : 'icon-expand-alt']"></span>
        </div> -->
        <div class="title">品牌销售</div>
        <div id="charts1" style="width: 100%; height: 400px"></div>
      </div>
        
      <!-- </div> -->
    </div>

    <!-- 最新内容 -->
    <div class="home-footer">
      <el-card class="box-card">
        <!-- <div slot="header" class="clearfix">
          <span>最新内容</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div> -->
        <h2>语言详情</h2>
        <h3>Vue</h3>
					<el-progress :percentage="71.3" color="#42b983"></el-progress>
          <h3>CSS</h3>
					<el-progress :percentage="24.1" color="#f1e05a"></el-progress>
          <h3>JavaScript</h3>
					<el-progress :percentage="13.7"></el-progress>
          <h3>HTML</h3>
					<el-progress :percentage="5.9" color="#f56c6c"></el-progress>
          <h3>Markdown</h3>
					<el-progress :percentage="5.9" color="#f16c7c"></el-progress>
					
      </el-card>


      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h2>新增产品</h2>
        </div>
        <div v-for="o in 10" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <h2>今日目标</h2>
        </div>
        <div class="text item">
          <!-- <el-button type="primary">产品管理</el-button> -->
          <el-checkbox v-for="item in message">
            <h3>
              {{item.title}}
            </h3>
          </el-checkbox>
        </div>
        </el-table>
      </el-card>
    </div>
   
    <div class="intrudion">
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          <h1>公司简介<i class="el-icon-s-help"></i></h1>
        </template>
        <el-divider></el-divider>
        <h4>
        <div>华为创立于1987年，是全球领先的ICT（信息与通信）基础设施和智能终端提供商。目前华为约有19.5万员工，业务遍及170多个国家和地区，服务全球30多亿人口。

        华为致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界：让无处不在的联接，成为人人平等的权利，成为智能世界的前提和基础；为世界提供多样性算力，让云无处不在，
        
        让智能无所不及；所有的行业和组织，因强大的数字平台而变得敏捷、高效、生机勃勃；通过AI重新定义体验，让消费者在家居、出行、办公、影音娱乐、运动健康等全场景获得极致的个性化智慧体验。

        面向未来的可持续发展，华为进一步在研究与创新领域加大投资，努力探索科学技术的无尽前沿，识别产业需求并攻克世界级的难题，以愿景和假设为牵引，与全球学术界开放合作，持续探索新理论、新架构、新技术，支撑产业长期可持续发展。

        华为秉承“开放合作共赢”的宗旨，携手各行业、各领域的产业和生态伙伴共建和谐健康的全球产业生态，着力在三个维度形成突破：突破认知的局限，突破合作的局限，突破信任的局限。
        
        华为与运营商、合作伙伴一起，累计签署超过3,000个5G行业应用商用合同。根据第三方测试报告显示，在瑞士、德国、芬兰、荷兰、韩国、沙特等13个国家，华为承建的5G网络，用户体验均为最佳。
        全球700多个城市、267家世界500强企业选择华为作为数字化转型的合作伙伴。 政企市场合作伙伴数量超过30,000家，其中销售伙伴超过20,000家，解决方案伙伴超过1,800家，服务与运营伙伴超过6,200家，人才联盟伙伴超过2,000家。
        5GtoB走向规模复制，助力8大行业3,000多个项目数字化转型。
        华为云与伙伴在全球共27个地理区域运营65个可用区，覆盖全球170多个国家和地区；已上线220多个云服务、210多个解决方案，发展260万开发者，云市场上架应用超过6,100个；聚合全球超过3万家合作伙伴，其中解决方案合作伙伴已经构建超过8,000个解决方案。
        截至2021年底，华为数字能源助力客户累计实现绿色发电4,829亿度，节约用电约142亿度，减少二氧化碳排放近2.3亿吨，相当于种植3.2亿棵树。
        搭载HarmonyOS的华为设备超过2.2亿台，华为终端全球月活用户超过7.3亿。全新发布的HMS Core 6，包括图形、媒体、人工智能等七大领域69个Kit（含13个跨操作系统Kit），共计开放21,738个API。
        华为开发者联盟的全球注册开发者已超过540万，集成HMS Core能力的应用超过18.7万个；HMS全球应用数量相比2020年增长147%。
        2021年，已累计发展了超过300 家产业链上下游合作伙伴；华为已上市30多款智能汽车零部件。

        <div>
          <a href="https://www.huawei.com/cn/corporate-information/research-development" @click="1">
          了解更多<i class="el-icon-more"></i>
        </a>
        </div>

      </div>
    </h4>
      </el-collapse-item>
    


      <el-collapse-item>
        <template slot="title">
          <h1>主研方向<i class="el-icon-star-on"></i></h1>
        </template>
        <el-divider></el-divider>
        <h4>
        <div>Golang(又称Go)是Google公司开发的一种静态强类型、编译型、并发型，并具有垃圾回收功能的编程语言。

          罗伯特·格瑞史莫，罗勃·派克（Rob Pike）及肯·汤普逊于2007年9月开始设计GO，稍后Ian Lance Taylor、Russ Cox加入项目。Go是基于Inferno操作系统所开发的。Go于2009年11月正式宣布推出，成为开放源代码项目，支持Linux、macOS、Windows等操作系统。在2016年，Go被软件评价公司TIOBE 选为“TIOBE 2016 年最佳语言”。
          
          目前，Go每半年发布一个二级版本（即从a.x升级到a.y）。</div>
          <div>
            <a href="https://golang.google.cn/" @click="2">
            了解更多<i class="el-icon-more"></i>
          </a>
          </div>

          <div>
            ubernetes，简称K8s，是用8代替名字中间的8个字符“ubernete”而成的缩写。是一个开源的，用于管理云平台中多个主机上的容器化的应用，Kubernetes的目标是让部署容器化的应用简单并且高效（powerful）,Kubernetes提供了应用部署，规划，更新，维护的一种机制。 [1] 
            传统的应用部署方式是通过插件或脚本来安装应用。这样做的缺点是应用的运行、配置、管理、所有生存周期将与当前操作系统绑定，这样做并不利于应用的升级更新/回滚等操作，当然也可以通过创建虚拟机的方式来实现某些功能，但是虚拟机非常重，并不利于可移植性。
            新的方式是通过部署容器方式实现，每个容器之间互相隔离，每个容器有自己的文件系统 ，容器之间进程不会相互影响，能区分计算资源。相对于虚拟机，容器能快速部署，由于容器与底层设施、机器文件系统解耦的，所以它能在不同云、不同版本操作系统间进行迁移。
            容器占用资源少、部署快，每个应用可以被打包成一个容器镜像，每个应用与容器间成一对一关系也使容器有更大优势，使用容器可以在build或release 的阶段，为应用创建容器镜像，因为每个应用不需要与其余的应用堆栈组合，也不依赖于生产环境基础结构，这使得从研发到测试、生产能提供一致环境。类似地，容器比虚拟机轻量、更“透明”，这更便于监控和管理。

            <div>
              <a href="https://kubernetes.io/zh" @click="3">
              了解更多<i class="el-icon-more"></i>
            </a>
            </div>
          </div>
        </h4>
      </el-collapse-item>




      <el-collapse-item>
        <template slot="title">
          <h1>技术人员<i class="el-icon-star-on"></i></h1>
        </template>
        <el-divider></el-divider>

        <h4>
          <div>尤雨溪，前端框架Vue.js的作者，HTML5版Clear的打造人，独立开源开发者。曾就职于Google Creative Labs和Meteor Development Group。由于工作中大量接触开源的JavaScript项目，最后自己也走上了开源之路，现全职开发和维护Vue.js的作者，HTML5版Clear的打造人，独立开源开发者。曾就职于Google。
        </div>
        <br>
        <div>蒂姆·伯纳斯·李（Tim Berners-Lee），英国皇家学会工艺院院士 ，OM，KBE，FRS，FREng，FRSA，（Sir Timothy John "Tim" Berners-Lee，1955年6月8日－），英国计算机科学家。
          他是万维网的发明者，南安普顿大学与麻省理工学院教授。1990年12月25日，罗伯特·卡里奥在CERN和他一起成功通过Internet实现了HTTP代理与服务器的第一次通讯。
          万维网联盟（W3C）是伯纳斯·李为关注万维网发展而创办的组织，并担任万维网联盟的主席。他也是万维网基金会的创办人。伯纳斯-李还是麻省理工学院计算机科学及人工智能实验室创办主席及高级研究员。同时，伯纳斯-李是网页科学研究倡议会的总监。最后，他是麻省理工学院集体智能中心咨询委员会成员。
          2004年，英女皇伊丽莎白二世向伯纳斯·李颁发不列颠帝国勋章的爵级司令勋章。2009年4月，他获选为美国国家科学院外籍院士。在2012年夏季奥林匹克运动会开幕典礼上，他获得了“万维网发明者”的美誉。伯纳斯·李本人也参与了开幕典礼，在一台NeXT计算机前工作。他在Twitter上发表消息说：“这是给所有人的”，体育馆内的LCD光管随即显示出文字来。2017年，他因“发明万维网、第一个浏览器和使万维网得以扩展的基本协议和算法”而获得2016年度的图灵奖。
        </div>
        <br>
        <div>
          伯特·波斯（英文名：Bert Bos 1963年11月10日－），伯特·波斯与维姆莱同为CSS的创始人。他于1995年加入W3C，为CSS的发展做出了卓越的贡献，并作为CSS项目的主要技术负责人参与各项国际活动。目前，伯特·波斯正致力于与样式表相关的活动，他是W3C的前任主席以及现任CSS工作组的W3C Staff Contact。
        </div>
        <br>
        <div>
          Brendan Eich先生中文名布兰登·艾奇，注意力币(Basic Attention Token)/BAT币创始人，Brendan Eich先生同时还是JavaScript的发明者，人称JS之父，也是 Mozilla 基金会和火狐浏览器的联合创始人。
          布兰登·艾奇1961年生于美国加州的森尼维尔市，毕业于伊利诺伊大学香槟分校。1986年获取伊利诺伊大学香槟分校计算机科学硕士学位。1995年任职于网景期间，为网景浏览器开发出JavaScript，之后成为浏览器上应用最广泛的脚本语言之一。1998年布兰登协助成立mozilla，2003年在美国在线决定结束网景浏览器的开发后，布兰登协助成立了Mozilla基金会。2014年3月24日，艾克晋升为Mozilla公司首席执行官。2014年4月3日，艾克宣布从Mozilla离职。艾克在他的个人博客中写道：“Mozilla的使命远超过我们任何一人，无法胜任Mozilla的领导职位”。2015年5月28日，艾克成立Brave软件公司，这是一家互联网安全公司，已经从天使投资者募集了250万美元的早期资金。该公司的联合创始人Brian Bondy曾在Mozilla和可汗学院工作。2016年1月20日，该公司发布了Brave网页浏览器。2017年5月，Brendan Eich发起的去中心化网页浏览器“Brave”仅30秒就完成了约3千5百万美元的ICO发售。
        </div>
      </h4>    
    </el-collapse-item>





      <el-collapse-item>
        <template slot="title">
          <h1>周边联动<i class="el-icon-star-on"></i></h1>
        </template>
        <el-divider></el-divider>
        <div>
          
          <a href="https://www.mcdonalds.com.cn/" @click="3">
            <h3>Mcdonalds<i class="el-icon-more"></i></h3>
          </a>
          
        </div>

        <div>
          <a href="https://www.mcdonalds.com.cn/" @click="4">
            <h3>KFC<i class="el-icon-more"></i></h3>
          </a>
        </div>

        <div>
          <a href="https://www.coca-colacompany.com/cn/our-company" @click="5">
            <h3>CoaCaCola<i class="el-icon-more"></i></h3>
          </a>
        </div>

        <div>
          <a href="https://www.subway.com.cn/" @click="6">
            <h3>Subway<i class="el-icon-more"></i></h3>
          </a>
        </div>

        <div>
          <a href="http://www.pizzahut.com.cn/" @click="7">
            <h3>Pizzahut<i class="el-icon-more"></i></h3>
          </a>
        </div>
      </el-collapse-item>
    </el-collapse>

  </div>
</div>
</template>

<script>
// import Rank from '@/components/Rank.vue'
import { mapState } from 'vuex'
import { reactive } from 'vue';

export default {
  components: {
    // Rank,
  },
  data() {
    return {
      totalData: [],
      activeNames: ['1'],
      imageurl:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      imgdata:[
        { url: require("@/assets/images/home/pic1.jpg") },
        { url: require("@/assets/images/home/pic2.jpg") },
        { url: require("@/assets/images/home/pic3.jpg") },
        { url: require("@/assets/images/home/pic4.jpg") },
        { url: require("@/assets/images/home/pic5.jpg") },
        { url: require("@/assets/images/home/pic6.jpg") },
      ],
      firstimage:[{url:require("@/assets/images/home/first.jpg")}],
      message:[
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要写100行代码加几个bug吧',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: true
        },
        {
          title: '今天要写100行代码加几个bug吧',
          status: true
        }
      ]
    };
  },
  mounted() {
    // console.log("this.$echarts.init", this.$echarts);
    // console.log(document.getElementById("charts"));
    // this.imgLoad();
    //         window.addEventListener('resize',() => {
    //             this.bannerHeight=this.$refs.bannerHeight[0].height;
    //             this.imgLoad();
    //         },false)
    //进度
    //销售数据量
    this.$api.getStatistical().then((res) => {
      console.log("销售数据量", res.data);
      //totalData
      if (res.data.status === 200) {
        this.totalData = res.data.list;
      }
    });
    //--销售比----------------------
    this.$api.getSellTotal().then((res) => {
      console.log(res.data);
      //获取x轴数据
      let xData = res.data.info.date;
      //获取数据
      let xResult = res.data.info.xResult;
      let titleArr = [];
      let data =[]

      xResult.forEach((ele) => {
        titleArr.push(ele.xName);
        ele.data.forEach(item=>{
          data.push(item.num)
        })
      });
      //折线 
      // this.initCharts(xData,data.slice(0,6),data.slice(6,12),data.slice(12,18));
      this.draw2();
      this.draw1();
    });
  },
  methods: {
    //折线图
    initCharts(data,data1,data2,data3) {
      let charts = this.$echarts.init(document.getElementById("charts"));
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["家具", "手机","家电"],
          left:100,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "家具",
            type: "line",
            smooth: true,
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data:data1,
          },
          {
            name: "手机",
            type: "line",
            smooth: true,
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: data2,
          },
          {
            name: "家电",
            type: "line",
            smooth: true,
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: data3,
          },
        ],
      };
      charts.setOption(option);
    },

    draw2(){
      let charts1 = this.$echarts.init(document.getElementById('charts1'))
      let option={
        
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              // Use axis to trigger tooltip
              type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
          },
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            
          },
          yAxis: {
            type: 'category',
            data: ['手机', '耳机', '手表', '外设', '蓝牙', '家具', '外圈']
          },
          series: [
            {
              name: '线上',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
              name: '维修',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '保养',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '二手',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
              name: '线下',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
          ]
        
      };
      charts1.setOption(option);
    },

    handleChange(val) {
        console.log(val);
      },
    draw1(){
      let charts = this.$echarts.init(document.getElementById("charts"));
      let option = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['product', '2015', '2016', '2017', '2018', '2019', '2020'],
            ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
              focus: 'self'
            },
            label: {
              formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: '2012',
              tooltip: '2012'
            }
          }
        ]
      };
      charts.on('updateAxisPointer', function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        charts.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });
      charts.setOption(option);
    },
  
    // jump1(){
    //   // window.open('https://www.huawei.com/cn/corporate-information/research-development') 
    // }
  
  
  },
};


</script>

<style lang='less' scoped>
/* .el-carousel__item h3 {
    color: #1b2f49;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #425770;
  } */
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */





  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    
  }


.home{
  margin: 10px;
}
.header {
  display: flex;
  padding-right: 30px;
  .item {
    flex: 1;
    height: 100px;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 28px;
    font-weight: bold;
    color: #fff;
    // text-align: center;
    position: relative;
    .num {
      font-size: 22px;
      margin: 10px;
          color: #fff;
    }
    .bottom {
      position: absolute;
      border-top: 1px solid rgb(246, 245, 245);
      padding: 10px 20px;
      bottom: 0;
      right: 0;
      left: 0;
          color: #fff;
          font-weight: normal;
    }
  }
   .item:nth-child(1){
    background-image: linear-gradient(#ee7160, #df8265);
  }
  .item:nth-child(2){
    background-image: linear-gradient(#409eff, #49a6df);
  }
   .item:nth-child(3){
    background-image: linear-gradient(#2ebb85, #4cc570);
  }
   .item:nth-child(4){
    background-image: linear-gradient(#c2dc2e, #95c746);
  }
}

.content {
  margin: 20px;
  display: flex;
  /* width: 800px; */
  height: 400px;
  .time-info {
    flex: 1;
    background: #fff;
    margin-right: 20px;
    padding: 10px;
  }
  .area {
    flex: 1;
    background: #fff;
    padding: 10px;
    /* margin-top: 25px;
      width: 100%;
      height: 28%;
      position: relative; */
  }
}

.home-footer {
  display: flex;
  padding-left: 20px;
  margin-bottom:20px;
  .box-card {
    flex: 1;
    margin-right: 30px;
    span {
      font-weight: 600;
    }
  }
}

.tail {
  display: flex;
  padding-left: 20px;
  margin-bottom:20px;
}

.intrudion{
  margin-left: 20px;
  margin-right: 28px;
}



</style>