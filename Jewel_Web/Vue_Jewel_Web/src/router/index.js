import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/home'
import One from '@/components/tabbar/one'
import Two from '@/components/tabbar/two'
import Three from '@/components/tabbar/three'
import Four from '@/components/tabbar/four'
import CalculatorOne from '@/components/class/calculator/one'
import CalculatorTwo from '@/components/class/calculator/two'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/mobile', component: Home, name: '首页' },
  { path: '/mobile/one', component: One, name: '分类' },
  { path: '/mobile/two', component: Two, name: '发现' },
  { path: '/mobile/three', component: Three, name: '资讯' },
  { path: '/mobile/four', component: Four, name: '我的' },
  { path: '/mobile/calculator/one', component: CalculatorOne, name: '赔偿清单' },
  { path: '/mobile/calculator/two', component: CalculatorTwo, name: 'xxx11计算器' }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
