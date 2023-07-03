<template>
  <div>
    <div class="bg-black text-white flex flex-col items-center justify-center pt-20">
      <div class="w-2/4 h-96 border border-orange-500 flex">
        <div class="w-1/2 flex items-center justify-center p-2">
          <img :src="user" alt="" class="w-4/5">
        </div>
        <div class="bg-orange-500 w-1/2 h-1/1 flex items-center justify-center flex-col text-black">
          <h1 class="text-xl font-bold  flex items-center justify-center text-center pb-6">Welcome Back! Sign In to
            continue on Blogify</h1>
          <h2>Enter your Email-Id</h2>
          <input v-model="userEmailref" type="text" class="w-4/5 h-8 mb-2 bg-grey-200">

          <h2>Enter your Password</h2>
          <input v-model="userPassref" type="password" class="w-4/5 h-8 mb-5">
          <button class="rounded-full bg-white px-10 py-2 font-bold" @click="login">Login</button>
          <h1>or</h1>
          <h1>Don't already have an account? <u>Sign up</u></h1>
          <h1>or</h1>
          <h1>Continue with</h1>
          <div class="flex w-2/4 justify-evenly">
            <img :src="github" alt="" class="h-5">
            <img :src="linkedin" alt="" class="h-5">
            <img :src="email" alt="" class="h-5">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import user from '../assests/images/formimage.png'
import github from '../assests/images/github.png'
import linkedin from "../assests/images/linkedIn.png"
import email from "../assests/images/email.png"
import setLocalStorage from '~/composables/storage'
definePageMeta({
    middleware: ["auth"]
    // or middleware: 'auth'
  })
const userEmailref = ref('')
const userPassref = ref('')

async function login() {
  let credentials = {
    email: userEmailref.value,
    password: userPassref.value,
  }

  if (userEmailref.value === '' || userPassref.value === '') {
    return console.log('Please fill in the credentials')
  }

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })

    const data = await response.json()

    authorizer(data)
    return console.log(data)
  } catch (error) {
    return console.error(error)
  }
}

async function authorizer(data) {
  // Save the JWT token to cookies

  document.cookie = `token=${data.token}; path=/;`
  await setLocalStorage(data.data)

  // Redirect to the home page
  if (data.message == 'loggedIn' || data.status == 200) {
    window.location.href = '/profile'
  } else {
    console.log('Please enter the correct credentials')
  }
}
</script>
  