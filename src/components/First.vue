<template lang = "html">
  <div id="First">
    <h1>{{ msg }}</h1>
    <ul>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
      msg: 'Welcome to Your First.js App'
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
