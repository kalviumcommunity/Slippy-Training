<template>
    
    <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 ">
<div class="flex justify-between mt-12 items-center">

</div>
    <div class="shadow rounded p-3 mt-5">
        <BlogListingcard v-for="blog in blogs" :key="blog.id" :blog="blog"/>
    </div>
    </div>

</template>

<script setup >
import { useBlogs } from '~/composables/useBlogs';

const {blogs} = useBlogs()
</script>

