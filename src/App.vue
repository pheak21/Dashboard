<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld :msg="msg" :text="text" theme="sale">
    <template v-slot:links>
      <a href="#">Sign in</a>
    </template>
    <p>"Welcome to Your Vue.js + TypeScript App,
      continue!!"</p>
  </HelloWorld> -->
  <!-- <div id="nav">
    <router-link :to="{ name: 'login'}">Sign In</router-link>
    <router-link :to="{ name: 'signup'}">Sign Up</router-link>
  </div> -->
  <!-- <Login/> -->
  <!-- <Accsignup/> -->
  <router-view/>
  <!-- <div class="grid grid-cols-3 gap-2">
    <div class="">01</div>
    <div class="">02</div>
    <div class="">03</div>
    <div class="col-span-2">03</div>
    <div class="">03</div>
    <div class="">03</div>
    <div class="col-span-2">03</div>
    <div class="">03</div>
    <div class="">03</div>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from './components/HelloWorld.vue';
// import Login from './components/Login.vue';
// import Accsignup from './components/Accsignup.vue';

export default defineComponent({
  name: "App",
  components: {
    // HelloWorld
    // Login,
    // Accsignup,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 20px;
}
#nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  padding: 14px;
  border-radius: 8px;
}
#nav a.router-link-exact-active {
  color: white;
  background: turquoise;
}
body {
  margin: 0px;
}
</style>
