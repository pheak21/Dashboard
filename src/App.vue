<template>
  <router-view/>
  <!-- <CompanyStructureVue/> -->
</template>

<script lang="ts" setup>
/* eslint-disable */
import {RouterView, useRoute} from 'vue-router';
import CompanyStructureVue from './components/CompanyStructure.vue';
import TestView from './views/testView.vue';
const route = useRoute();

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
/* div {
  border: 1px solid black;
  border-radius: 10px;
} */
</style>
