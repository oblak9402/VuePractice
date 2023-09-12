<template>
    <div>
        <div>
    <form class="form-signin">
      <h1 class="h3 mb-3 fw-normal">請先登入</h1>
      <label for="inputEmail" class="visually-hidden">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="email">
      <label for="inputPassword" class="visually-hidden">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
    </form>
    <form class="form-signin">
      <h1 class="h3 mb-3 fw-normal">請先註冊</h1>
      <label for="inputEmail" class="visually-hidden">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="email">
      <label for="inputPassword" class="visually-hidden">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
    </form>
  </div>
      <h1>{{ msg }}</h1>
      <button @click="login">Login Using Google</button>
      <br>
      <GoogleLogin :callback="callback"/>
     
    </div>
  </template>
  
  <script>
  //import {ref} from 'vue';
  import {useStore} from 'vuex';
  
  export default {
    setup(){
      
        const store = useStore();

        return {
        
            store
        }
    },
    
    name: 'LoginPage',
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
  