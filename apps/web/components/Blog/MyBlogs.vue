<template>
    <div class="shadow rounded overflow-hidden flex flex-col md:flex-row justify-between mb-4 border-solid border-2 border-black-500">
  <div class="flex flex-col md:flex-row">
    <img :src="blog.image" alt="" class="w-full md:w-80 h-44 md:mr-3 md:h-auto" />
    <div class="p-3 flex flex-col justify-between">
      <h1 class="text-2xl">{{ blog.title }}</h1>
      <p class="text-blue-400">{{ blog.date }}</p>
    </div>
  </div>
  <div class="p-3 flex flex-col items-end justify-end">
    <div class="flex space-x-2">
      <button class="rounded-full bg-orange-500 text-white p-2">
        <img :src="share" class="w-5 h-4" alt="">
      </button>
      <button class="rounded-full bg-orange-500 text-white p-2">
        <img :src="edit" class="w-5 h-4" alt="">
      </button>
      <button class="rounded-full bg-orange-500 text-white p-2">
        <img :src="close" class="w-5 h-4" alt="">

      </button>
    </div>
    
  </div>
</div>


  </template>

<script setup>
import share from '../../assests/images/png-transparent-computer-icons-sharing-share-to-miscellaneous-sharing-data-removebg-preview.png'
import edit from '../../assests/images/Pencil.png'
import close from '../../assests/images/Close.png'

    const props = defineProps({
        blog:Object
    })
</script>

