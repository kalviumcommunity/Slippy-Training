<template>
    <div class="shadow rounded overflow-hidden flex flex-col md:flex-row justify-between mb-4 border-solid border-2 border-black-500">
      <div class="flex flex-col md:flex-row">
        <img :src="blog.image" alt="" class="w-full md:w-80 h-44 md:mr-3 md:h-auto" />
        <div class="p-3 flex flex-col justify-between">
          <h1 class="text-2xl">{{ blog.title }}</h1>
          <p class="text-blue-400">{{ blog.date }}</p>
        </div>
      </div>
      <div class="p-3 flex">
        <!-- Additional content or elements here -->
      </div>
    </div>
  </template>

<script setup>
    const props = defineProps({
        blog:Object
    })
</script>

