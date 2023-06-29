<template>
    <div>
        <div class="flex justify-center mt-10">
  <div class="max-w-xl bg-white border border-black rounded-lg overflow-hidden shadow-lg">
    <div class="flex">
      <img class="w-1/3 p-2" src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="User Photo">
      <div class="p-4">
        <div class="font-bold text-xl mb-2">Hey, Balaji S,</div>
        <p class="text-gray-700 mb-2">Email: balajiS.@example.com</p>
        <p class="text-gray-700 mb-4">Number of blog posts: 10</p>
        <div class="flex justify-end">
          <button class="px-4 py-2 bg-orange-500 text-white rounded">Edit Account</button>
          <button class="ml-4 px-4 py-2 bg-orange-500 text-white rounded">Logout</button>
        </div>
      </div>
    </div>
    
  </div>
</div>

<div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 ">
<div class="flex justify-between mt-12 items-center">
    <h1 class="text-6xl">My Blogs!</h1>
            <NuxtLink to="/editor"
                class="w-8 h-8 bg-orange-400 flex justify-center items-center rounded-full text-white font-bold cursor-pointer">
                +</NuxtLink>
</div>
    <div class="shadow rounded p-3 mt-5">
        <BlogMyBlogs v-for="blog in blogs" :key="blog.id" :blog="blog"/>
    </div>
    </div>


    </div>
</template>

<script setup >
const {blogs} = useBlogs()
</script>

