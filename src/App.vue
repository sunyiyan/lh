/**主容器页面 里面各种 子页面，子页面的跳转 形成 网页APP */ 
<template>
  <div id="app">  
    <!-- <img src="./assets/logo.png"> -->
    <ul>
      <li>
        <a v-on:click="$goRoute('/First')">go</a>
        <a @click="$goRoute('/First')">走着</a>
        <a @click="$goRoute('/HomeMenu')">HomeMenu</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
 
<script>
export default {
  name: 'app',
  data(){
    return{
      route:'/First'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
