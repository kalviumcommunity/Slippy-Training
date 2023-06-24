<template>
    <div class="text-red-400">
        <h1>http://localhost:3000/blog/edit/{{ route.params.blogId }}</h1>
    </div>
</template>

<script setup >
const route = useRoute()
</script>