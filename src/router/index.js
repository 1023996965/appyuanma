import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tuijian from'../pages/tuijian'
import banben from'../pages/banben'
import zhiye from'../pages/zhiye'
import zhuanlan from'../pages/zhuanlan'
import xinwen from'../pages/xinwen'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tuijian',
      component: tuijian
    },
    {
      path: '/tuijian',
      name: 'tuijian',
      component: tuijian
    },
    {
      path: '/banben',
      name: 'banben',
      component: banben
    },
    {
      path: '/zhiye',
      name: 'zhiye',
      component: zhiye
    },
    {
      path: '/zhuanlan',
      name: 'zhuanlan',
      component: zhuanlan
    },{
      path: '/xinwen',
      name: 'xinwen',
      component: xinwen
    }
  ]
})
