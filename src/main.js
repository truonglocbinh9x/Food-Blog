import Vue from 'vue'
import App from './App.vue'
import Default from './layouts/Default'
import NoSidebar from './layouts/NoSidebar'
import router from './router'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

Vue.component('default-layout', Default)
Vue.component('no-sidebar-layout', NoSidebar)
Vue.prototype.$http = axios
Vue.config.productionTip = false
require('./assets/css/bootstrap.css');
require('./assets/css/css_slider.css');
require('./assets/css/font-awesome.min.css');
require('./assets/css/style.css');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
