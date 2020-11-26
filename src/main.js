import Vue from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import Axios from 'axios'

Vue.use(Antd)
Vue.use(ElementUI)
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
