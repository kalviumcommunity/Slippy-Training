<template>
    <div>
        <!-- <h1>http://localhost:3000/signup</h1> -->
        <div class="bg-black text-white flex flex-col items-center justify-center pt-8">
                <div class="w-2/4 h-120 border border-orange-500 flex">
                    <div class="w-1/2 flex items-center justify-center p-2">
                        <img :src="user" alt="" class="w-4/5">
                    </div>
                    <div class="bg-orange-500 w-1/2 h-1/1 flex items-center justify-center flex-col text-black">
                        <h1 class="text-xl font-bold  flex items-center justify-center text-center pb-5">Start Your journey With Blogify today. Stay updated about the latest trends and create impact</h1>
                        <h2>Enter youe Email-Id</h2>
                        <input type="text" class="w-4/5 h-6 mb-2 bg-grey-200">

                        <h2>Enter your Password</h2>
                        <input type="text" class="w-4/5 h-6 mb-2">

                        <h2>Confirm your Password</h2>
                        <input type="text" class="w-4/5 h-6 mb-3">

                        <button class="rounded-full bg-white px-10 py-2 font-bold">Sign Up</button>
                        <h1>or</h1>
                        <h1>Already have an account? <u>Log In</u></h1>
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

<script setup >
import user from '../assests/images/formimage.png'
import github from '../assests/images/github.png'
import linkedin from "../assests/images/linkedIn.png"
import email from "../assests/images/email.png"

</script>

