import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入通用的样式
import './styles/base.less'
import './styles/iconfont.css'
// 导入vant
import Vant from 'vant'

// import { Button } from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'

import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import axios from 'axios'

// 把axios挂载到vue的原型
Vue.prototype.$axios = axios
// 给axios配置默认的baseURL ,基准地址
axios.defaults.baseURL = 'http://localhost:3000'
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)

// 全局的把vant所有的组件都导入好了
Vue.use(Vant)
// Vue.use(Button)
// import Button from 'vant/lib/button'
// import 'vant/lib/button/style'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
