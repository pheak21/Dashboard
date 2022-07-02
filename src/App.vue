<template>
  <!-- <section class="h-full gradient-form bg-gray-200 md:h-screen">
    <div class="container py-12 px-6 h-full">
      <div
        class="
          flex
          justify-center
          items-center
          flex-wrap
          h-full
          g-6
          text-gray-800
        "
      >
        <div class="xl:w-10/12">
          <div class="block bg-white shadow-lg rounded-lg">
            <div class="lg:flex lg:flex-wrap g-0">
              <HomeViews/>
              <div class="lg:w-6/12 px-4 md:px-0">
                <router-view/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <HomeViews/>
</template>

<script lang="ts" setup>
/* eslint-disable */
import {RouterView, useRoute} from 'vue-router';
import HomeViews from '../src/views/HomeView.vue';

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
