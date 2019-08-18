<template>
  <div id="hello text-center">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
    <li v-on:click="nav()">
      <span>导航</span>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },methods:{
    nav(){
         this.$router.push({name:'/First'+this.nav+1,params:{}})
    }
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
