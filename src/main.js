import Vue from 'vue'
import App from './App.vue'

import router from "./router.js"
import store from './store.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

import { setupVueRouterNavigate } from './routerNavigate';
setupVueRouterNavigate(router, store)

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
