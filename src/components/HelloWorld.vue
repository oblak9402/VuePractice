<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="login">Login Using Google</button>
    <br>
    <GoogleLogin :callback="callback"/>
   
  </div>
</template>

<script>


export default {
  
  name: 'HelloWorld',
  props: {
    msg: String
  },


}
</script>
<script setup>


import { googleTokenLogin } from "vue3-google-login"
const login = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response)
  })
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
