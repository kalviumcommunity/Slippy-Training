<template>
  <div>
    <div class="bg-gray-200 py-4">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-3xl font-bold">{{ blog.title }}</h1>
          <div class="mt-2">
            <p class="text-gray-700">Published on {{ blog.createdAt.slice(0,10) }}</p>
            <p class="text-gray-700">By: {{ blog.authorName }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <!-- Blog content generated from Quill -->
      <div id="blog-content" class="max-w-4xl mx-auto" v-html="blog.content"></div>
    </div>
  </div>
</template>

<script setup>


const route = useRoute()
const { data: blog } = await useFetch(`/api/blog/${route.params.id}`)


</script>

<style scoped></style>
