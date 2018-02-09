<template>
  <div id='home'>
    <!-- swiper滑动组件 可传入 url和img-->
    <swiper :list="demo01_list" loop auto v-model="demo01_index" @on-index-change="demo01_onIndexChange" :show-desc-mask="false" dots-position="center"></swiper>
    <!-- 排行版 -->
    <grid class="no_right_line">
      <grid-item link="/component/cell" label="排行">
        <img slot="icon" src="../../assets/icon/rank.svg">
      </grid-item>
      <grid-item link="/component/cell" label="分类">
        <img slot="icon" src="../../assets/icon/list1.svg">
      </grid-item>
      <grid-item link="/component/cell" label="菜单">
        <img slot="icon" src="../../assets/icon/bookmask.svg">
      </grid-item>
      <grid-item link="/component/cell" label="菜单">
        <img slot="icon" src="../../assets/icon/confime.svg">
      </grid-item>
      <grid-item link="/component/cell" label="菜单">
        <img slot="icon" src="../../assets/icon/map.svg">
      </grid-item>
    </grid>

    <div class="swiper-flex-box text-scroll">
      <div class="box-title">资讯快报</div>  
      <swiper class="box-content"  auto loop height="30px" direction="vertical" :interval=2000 :show-dots="false">
        <swiper-item><p>xxx用户 完成xxx任务 获得20金币</p></swiper-item>
        <swiper-item><p>xxx用户 兑换xxx任务礼包 消耗30金币</p></swiper-item>
        <swiper-item><p>xxx用户 完成xxx任务 获得30金币</p></swiper-item>
        <swiper-item><p>xxx用户 兑换xxx任务礼包 消耗20金币</p></swiper-item>
        <swiper-item><p>xxx用户 兑换xxx任务礼包 消耗20金币</p></swiper-item>
        <swiper-item><p>xxx用户 兑换xxx任务礼包 消耗30金币</p></swiper-item>
      </swiper>
    </div>

    <flexbox :gutter="0">
      <flexbox-item :span="1/3">
        <div class="flex-demo recommend border-right_1  border-bottom_1">
          <p class="recommend-title">HOT热门推荐</p>
          <p class="recommend-summary">编辑力荐 超级好运</p>
          <img src="http://img3m9.ddimg.cn/19/36/23913469-1_w_2.jpg" width="100">
        </div>
      </flexbox-item>
      <flexbox-item :span="2/3">
        <div class="flex-demo recommend">
          <div class="recommend_inline  border-bottom_1">
            <div class="recommend-left">
              <p class="recommend-title" style="color:rgb(67, 175, 32)">FREE独家免费</p>
              <p class="recommend-summary">本月TOP100</p>
            </div>
            <img src="http://img3m9.ddimg.cn/19/36/23913469-1_w_2.jpg" width="80" class="recommend_img" style="float:right;">
          </div>
          <div class="recommend_inline">
            <div class="recommend-left">
              <p class="recommend-title" style="color:rgb(40, 216, 220);">NEW新品上架</p>
              <p class="recommend-summary">可复制的小标题</p>
            </div>
            <img src="http://img3m9.ddimg.cn/19/36/23913469-1_w_2.jpg" width="80" class="recommend_img" style="float:right;">
          </div>
        </div>
      </flexbox-item>
    </flexbox>

    <h1>{{$t('m.music')}}</h1>
    <h1>{{$t('m.music')}}</h1>
    <h1>{{$t('m.music')}}</h1>
    <h1>{{$t('m.music')}}</h1>
    <h1>{{$t('m.music')}}</h1>
    <h1>{{$t('m.music')}}</h1>

    <swiper auto loop height="100px" :show-dots="false" :interval=4000>
      <swiper-item class="black"><h2 class="title fadeInUp animated">它无孔不入</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">你无处可藏</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">而是它不懂你</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">我们试图</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">做些改变</h2></swiper-item>
    </swiper>

    

  </div>
</template>

<script>
import { Swiper, SwiperItem, Grid, GridItem, GroupTitle, Flexbox, FlexboxItem, Divider } from 'vux'
// swiper 内容
const baseList = [{
  url: 'javascript:',
  img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
  fallbackImg: '../static/img/404_img.png'
}, {
  url: 'javascript:',
  img: 'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  fallbackImg: '../static/img/404_img.png'
}, {
  url: 'http://xiajiajun.com',
  img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
  fallbackImg: '../static/img/404_img.png'
}]

const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

export default {
  components: {
    Swiper,
    SwiperItem,
    Grid,
    GridItem,
    GroupTitle,
    Flexbox,
    FlexboxItem,
    Divider
  },
  ready () {
  },
  data () {
    return {
      demo01_list: baseList,
      demo04_list: imgList,
      demo01_index: 0,
      swiperItemIndex: 1
    }
  },
  methods: {
    // swiper 配置
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo01_onIndexChange (index) {
      this.demo01_index = index
    }
  }
}
</script>

<style scoped>
  .recommend{
    height: 200px;
    border: 1px solid #eee;
    border-left: none;
    border-right: none;
    border-top: none;
  }
  .recommend-left{
    float: left;
    text-align: left;
  }
  .recommend_img{
    float: right;
    padding-top: 10px;
  }
  .recommend_inline{
    height:100px;
    padding:0 20px 0 20px;
  }
  .recommend-title{
    font-size: 14px;
    color:#f93a7a;
    font-weight: 600;
    padding-top:  20px;
    padding-bottom: 5px;
  }
  .recommend-summary{
    font-size: 12px;
    font-weight: 100;
    color:#cbcbcb;
    padding-bottom: 20px;
  }
  .border-right_1{
    border-right: 1px solid #eee;
  }
  .border-bottom_1{
    border-bottom: 1px solid #eee;
  }
  .flex-demo {
    text-align: center;
    color: rgb(119, 119, 119);
    background-clip: padding-box;
  }
  .swiper-flex-box{
    width: 100%;
    display: flex;
    text-align: center;
    line-height: 32px;
  }
  .swiper-flex-box .box-title{
    width:80px;
    font-size: 14px;
    font-weight: 600;
    color: #f93a7a;
  }
  .swiper-flex-box .box-content{
    flex:1;
  }
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
  .copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
    border-top: none;
  }
  .text-scroll p{
    font-size: 12px;
    text-align: left;
    line-height: 30px;
    color:#333;
    font-weight: 200;
    letter-spacing: 1px;
    padding-left: 5px;
  }
  .black {
    background-color: #000;
  }
  .title{
    line-height: 100px;
    text-align: center;
    color: #fff;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }
  #home .no_right_line .weui-grid{
    padding: 15px 10px 10px 10px;
  }
  #home .no_right_line .weui-grid::after {
    border-bottom:none!important;
  }
  #home .no_right_line .weui-grid::before {
    display: none;
  }
</style>
