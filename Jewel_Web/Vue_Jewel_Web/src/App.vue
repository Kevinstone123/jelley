<template>
    <div style="height:100%;">

      <div v-transfer-dom>
        <actionsheet :menus="menus" v-model="showMenu" @on-click-menu="changeLocale"></actionsheet>
      </div>

      <drawer :show.sync="drawerVisibility" :show-mode="showModeValue" :placement="showPlacementValue" :drawer-style="{'background-color':'#35495e', width: '200px'}">
        <!-- 侧边栏内容 -->
        <div slot="drawer">
          <group title="侧边栏" style="margin-top:20px;">
            <cell title="第一个" link="/mobile/one" value="跳转" @click.native="drawerVisibility = false"></cell>
          </group>
        </div>

        <!-- 主题内容 -->
        <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">

          <!-- 顶部导航栏 -->
          <x-header v-if="$route.path !== '/mobile/calculator/one' && $route.path !== '/mobile/calculator/two'"  slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :left-options="leftOptions" :right-options="rightOptions" :title="title" transition="vux-header-fade-in-left" @on-click-more="onClickMore">
            <span v-if="$route.path === '/mobile/'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
              <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
            </span>
          </x-header>

          <!-- 主窗口 -->
          <router-view class="router-view"></router-view>

          <!-- 底部导航栏 -->
          <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo" slot="bottom">
            <tabbar-item :link="{path:'/mobile/'}" :selected="$route.path === '/mobile/'">
              <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
              <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item :link="{path:'/mobile/one'}" :selected="$route.path === '/mobile/one'">
              <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
              <span slot="label">分类</span>
            </tabbar-item>
            <tabbar-item :link="{path:'/mobile/two'}" :selected="$route.path === '/mobile/two'">
              <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
              <span slot="label">发现</span>
            </tabbar-item>
            <tabbar-item :link="{path:'/mobile/three'}" :selected="$route.path === '/mobile/three'">
              <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
              <span slot="label">资讯</span>
            </tabbar-item>
            <tabbar-item :link="{path:'/mobile/four'}" :selected="$route.path === '/mobile/four'">
              <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
              <span slot="label">我的</span>
            </tabbar-item>
          </tabbar>

        </view-box>

      </drawer>
    </div>
</template>

<script>
import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
import { mapState, mapActions } from 'vuex'
export default {
  directives: {
    TransferDom
  },
  components: {
    Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    Actionsheet
  },
  data () {
    return {
      showMenu: false,
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        'en': 'English'
      },
      drawerVisibility: false,
      showMode: 'push',
      showModeValue: 'overlay',
      showPlacement: 'left',
      showPlacementValue: 'left'
    }
  },
  // 加载时先执行
  created: function () {
    this.changeLanguage()
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      deviceready: state => state.app.deviceready,
      demoTop: state => state.vux.demoScrollTop,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    // 在特定路由下 不显示
    isTabbarDemo () {
      // 计算器下的不显示
      return /calculator/.test(this.$route.path)
    },
    // 计算 title 的名字 从 route 注册时 获取name ：默认title
    title () {
      return this.$route.name ? `${this.$route.name}` : 'title'
    },
    leftOptions () {
      return {
        showBack: this.$route.path !== '/mobile'
      }
    },
    rightOptions () {
      return {
        showMore: true
      }
    }
  },
  methods: {
    ...mapActions([
      'updateDemoPosition'
    ]),
    // 弹出侧边栏事件
    onClickMore () {
      this.showMenu = true
    },
    // 切换语言事件
    changeLocale (locale) {
      let lang
      if (locale === 'zh-CN') {
        lang = 'zh-CN'
        this.$i18n.locale = lang // 关键语句
        this.$store.dispatch('ToggleLanguage', lang)
      } else {
        lang = 'en-US'
        this.$i18n.locale = lang // 关键语句
        this.$store.dispatch('ToggleLanguage', lang)
      }
    },
    // 加载时确认语言版本
    changeLanguage () {
      this.$i18n.locale = this.$store.state.cookie.language
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less';

  body {
    background-color: #fbf9fe;
  }
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .demo-icon-22 {
    font-family: 'vux-demo';
    font-size: 22px;
    color: #888;
  }
  .weui-tabbar.vux-demo-tabbar {
    /** backdrop-filter: blur(10px);
    background-color: none;
    background: rgba(247, 247, 250, 0.5);**/
  }
  .vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
    color: #F70968;
  }
  .vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
    color: rgb(53, 73, 94);
  }
  .demo-icon-22:before {
    content: attr(icon);
  }
  .vux-demo-tabbar-component {
    background-color: #F70968;
    color: #fff;
    border-radius: 7px;
    padding: 0 4px;
    line-height: 14px;
  }
  .weui-tabbar__icon + .weui-tabbar__label {
    margin-top: 0!important;
  }
  .vux-demo-header-box {
    z-index: 100;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }

  @font-face {
    font-family: 'vux-demo';  /* project id 70323 */
    src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot');
    src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix') format('embedded-opentype'),
    url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff') format('woff'),
    url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf') format('truetype'),
    url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont') format('svg');
  }

  .demo-icon {
    font-family: 'vux-demo';
    font-size: 20px;
    color: #04BE02;
  }

  .demo-icon-big {
    font-size: 28px;
  }

  .demo-icon:before {
    content: attr(icon);
  }

  .router-view {
    width: 100%;
    top: 46px;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 46px;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .menu-title {
    color: #888;
  }
  // 重写title
  #calculator .weui-cells__title {
    color: #333!important;
    font-weight: 600;
  }
  #calculator .weui-cells{
    overflow: visible !important;
  }
  .title_icon_pos{
    font-size: 13px;
    text-align: left;
  }
  .title_icon_span{
    font-weight: 600;
    color: black;
    line-height: 2;
  } 
  /* WebKit browsers */
  #calculator input::-webkit-input-placeholder { color: #ddd; font-size: 16px;}
  /* Mozilla Firefox 4 to 18 */
　#calculator input:-moz-placeholder { color:#ddd;font-size: 16px;}
  /* Mozilla Firefox 19+ */
　#calculator input::-moz-placeholder { color:#ddd;font-size:16px;}
  /* Internet Explorer 10+ */
　#calculator input:-ms-input-placeholder{ color:#ddd;font-size:16px;}
</style>
