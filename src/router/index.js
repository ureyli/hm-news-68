import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import UserEdit from '../views/UserEdit.vue'
import Demo from '../views/Demo.vue'

Vue.use(VueRouter)
// 全局的把push的异常给处理了
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/user', component: User, name: 'user' },
  { path: '/user-edit', component: UserEdit, name: 'user-edit' },
  { path: '/demo', component: Demo, name: 'demo' }
]

const router = new VueRouter({
  routes
})
// 配置全局的导航守卫
// to: 到哪儿去
// from: 从哪儿来
// next: 函数，代表是否放行
// 判断 to的path 是否是/user 判断用户是否是去个人中心
// 1. 如果不是去个人中心  next() 放行
// 2. 如果是去个人中心 判断是否有token
//  如果有， 放行
//  如果没有， 跳转到登录去
router.beforeEach(function(to, from, next) {
  // 只要路由发生跳转，跳转之前这个函数就要执行
  // console.log('前置导航守卫执行了')
  // console.log('to', to)
  // console.log('from', from)
  // if (to.name === 'user') {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     next()
  //   } else {
  //     router.push('/login')
  //   }
  // } else {
  //   next()
  // }
  const token = localStorage.getItem('token')
  if (to.name !== 'user' || token) {
    next()
  } else {
    router.push('/login')
  }
})

export default router
