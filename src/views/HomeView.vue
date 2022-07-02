<template>
  <!-- <div
    class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none sm:invisible lg:visible"
    style="background: brown"
  >
    <div class="text-white px-4 py-6 md:p-12 md:mx-6">
      <h2 class="text-xl font-semibold mb-6">KOI</h2>
      <p class="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div> -->
  <section class="h-full gradient-form bg-gray-200 md:h-screen">
    <div class="container py-12 px-6 h-full">
      <div
        class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
      >
        <div class="xl:w-10/12">
          <div class="block bg-white shadow-lg rounded-lg">
            <div class="lg:flex lg:flex-wrap g-0">
              <div
                class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none sm:invisible lg:visible"
                style="background: brown"
              >
                <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                  <h2 class="text-xl font-semibold mb-6">KOI</h2>
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div class="lg:w-6/12 px-4 md:px-0">
                <router-view />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { RouterView, useRoute } from "vue-router";
import LoginForm from "../components/LoginForm.vue";
</script>

<style></style>
