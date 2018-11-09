import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
import toastRegistry from 'base/toast/index'
import alertRegistry from 'base/alert/index'
// 这里也可以直接执行 toastRegistry()
Vue.use(toastRegistry)
Vue.use(alertRegistry)
