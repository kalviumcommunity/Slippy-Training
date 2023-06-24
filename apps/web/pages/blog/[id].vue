<template>
    <div class="text-blue-800">
        <h1>http://localhost:3000/blog/{{ route.params.id }}</h1>
    </div>
</template>

<script setup >
const route = useRoute()
</script>