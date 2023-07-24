<template>
  <div>
    <div class="flex justify-center mt-10">
      <div class="max-w-xl bg-white border border-black rounded-lg overflow-hidden shadow-lg">
        <div class="flex">
          <img class="w-1/3 p-2" src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="User Photo">
          <div class="p-4">
            <div class="font-bold text-xl mb-2">Hey, {{ data.name }}</div>
            <p class="text-gray-700 mb-2">Email:{{ data.email }}</p>
            <p class="text-gray-700 mb-4">Number of blog: {{ response.length }}</p>
            <div class="flex justify-centre">
              <!-- beta -->
              <!-- <button class="px-4 py-2 bg-orange-500 text-white rounded">Edit Account</button> -->
              <button class="ml-4 px-4 py-2 bg-orange-500 text-white rounded" @click="logout">Logout</button>
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
        <BlogMyBlogs v-for="blog in response" :key="blog.id" :blog="blog"  @delete-click="handleDelete"/>
      </div>
    </div>


  </div>
</template>

<script setup >
import { userDetails } from '~/composables/userDetails';
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})


const token = useCookie('token').value

const { data: response } = await useFetch(
    `/api/myblogs`,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
  )

  
 



const handleDelete = async(id)=>{
    const res = await $fetch(`/api/blog/delete/${id}`,{
        method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    response.value = response.value.filter(respons=> respons.id!=id)
}

let data = await userDetails();

async function logout() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    window.location.href = '/'

  }
}
</script>

