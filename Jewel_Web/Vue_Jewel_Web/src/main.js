// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Es6Promise from 'es6-promise'
import App from './App'
import router from './router'
import store from './vuex/store'
import { DatetimePlugin, ConfigPlugin, BusPlugin, LocalePlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'
import VueI18n from 'vue-i18n'

// cmd方式
require('es6-promise').polyfill()
// ES6模块方式
Es6Promise.polyfill()

// 通过插件的形式挂载
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueI18n)
// plugins
Vue.use(LocalePlugin)
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(DatetimePlugin)

// global VUX config
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

// test
if (process.env.platform === 'app') {
  Vue.use(AppPlugin, store)
}

/** i18n **/
const i18n = new VueI18n({
  locale: 'zh-CN',     // 语言标识
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh'),   // 中文语言包
    'en-US': require('./common/lang/en')    // 英文语言包
  }
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app-box')
