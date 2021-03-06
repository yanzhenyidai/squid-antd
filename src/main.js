import Vue from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import store from "./store"
import Axios from 'axios'

Vue.use(Antd)
Vue.use(ElementUI)
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

import './permission'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
