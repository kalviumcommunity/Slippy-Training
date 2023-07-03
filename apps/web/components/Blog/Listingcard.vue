<template>
  <div
    class="shadow rounded overflow-hidden flex flex-col md:flex-row justify-between mb-4 border-solid border-2 border-black-500"
  >
    <nuxt-link :to="`/blog/${blog.id}`"
      ><div class="flex flex-col md:flex-row">
        <img
          src="https://images.mid-day.com/images/images/2023/jan/chatgp-istock_d.jpg"
          alt=""
          class="w-full md:w-80 h-44 md:mr-3 md:h-auto"
        />
        <div class="p-3 flex flex-col justify-between">
          <h1 class="text-2xl">{{ blog.title }}</h1>
          <div class="flex">
            <p class="text-blue-400 mr-6">{{ blog.createdAt.slice(0, 10) }}</p>
            <p class="text-red-400 ml-2">
              <span class="text-blue-400">By: </span>{{ blog.authorName }}
            </p>
            <!-- Add the author's name here -->
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps({
  blog: Object,
});
</script>

