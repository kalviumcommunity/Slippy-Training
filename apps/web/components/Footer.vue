<template>
  <div class="bg-black">
    <img :src="logo" alt="" class="h-24">
    <div class="bg-orange-500 flex items-center justify-center flex-col">
      <h1 class="text-2xl font-bold pb-5 pt-5">Conatct Us at</h1>
      <div class="flex w-1/4 justify-evenly pb-5">
        <img :src="github" alt="" class="h-10">
        <img :src="linkedin" alt="" class="h-10">
        <img :src="email" alt="" class="h-10">


      </div>
    </div>
  </div>
  </template>
  
  <script setup >
    import github from '../assests/images/github.png'
    import linkedin from "../assests/images/linkedIn.png"
    import email from "../assests/images/email.png"
    import logo from '../assests/images/Rectangle 5.png' 
  </script>
  
  <style scoped>
  </style>