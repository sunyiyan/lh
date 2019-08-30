// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//声明公共方法
Vue.prototype.$goRoute = function (index){
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  router,
  render:h =>h(App) // app浏览器渲染
}).$mount('#app') // 绑定app id 

