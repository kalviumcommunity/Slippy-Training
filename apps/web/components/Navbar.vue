<template>
  <div class="bg-black text-white flex ">
      <!-- <h1>Navbar</h1> -->
      <div class="w-2/6">
        <img :src="logo" alt="" class="h-24"/>
      </div>
      <div class="flex justify-evenly items-center p-15 w-3/6">
        <h1 class="p-15">About</h1>
        <h1>Blogs</h1>
      </div >
      <div class="flex justify-around items-center p-15 w-1/6">
        <h1>login</h1>
        
        <button class="bg-orange-500 text-black h-10 rounded-full px-4 m-15"> Sign Up</button>

      </div>
    

    
    </div>

</template>

<script setup >
import logo from '../assests/images/Rectangle 5.png'
</script>

<style scoped>
</style>