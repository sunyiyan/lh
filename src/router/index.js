import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Enter from '@/components/Enter'
import HomeMenu from '@/components/HomeMenu'

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
      component:Enter,
      children:[
        {
          path:'/',
          name:'HomeMenu',
          component:HomeMenu
        }
      ]
    }
  ]
})
