import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Enter from '@/components/Enter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/First',
      name: 'First',
      component:First
    },{
      path:'/Enter',
      name:'Enter',
      component:Enter
    }
  ]
})
