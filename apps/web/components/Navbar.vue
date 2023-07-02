<template>
  <div class="bg-black text-white flex">
    <div class="w-2/6">
      <nuxt-link to="/"><img :src="logo" alt="" class="h-24" /></nuxt-link>
    </div>
    <div class="flex justify-evenly items-center p-15 w-3/6">
      <h1 class="p-15"><nuxt-link to="/about">About</nuxt-link></h1>
      <h1><nuxt-link to="/blogs">Blogs</nuxt-link></h1>
    </div>

    <div class="flex justify-around items-center p-15 w-1/6">
      <!-- Render the login and sign-up components if not logged in -->
      <template v-if="!loggedIn">
        <h1><nuxt-link to="/login">Login</nuxt-link></h1>
        <button class="bg-orange-500 text-black h-10 rounded-full px-4 m-15">
          <nuxt-link to="/signup">Sign Up</nuxt-link>
        </button>
      </template>

      <!-- Render the profile button if logged in -->
      <template v-if="loggedIn">
        <button class="bg-orange-500 text-black h-10 rounded-full px-4 m-15">
          <nuxt-link to="/profile">PROFILE</nuxt-link>
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
import logo from '../assests/images/Rectangle 5.png'
import { userDetails } from '~/composables/userDetails';
const res = await userDetails();
let loggedIn = res.loggedIn
</script>

<style scoped></style>