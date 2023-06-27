<template>
    <div>
        <div class="bg-black text-white flex flex-col">
            <div class="h-150 flex">
                <h1 class="w-1/2 text-8xl h-200 font-semibold">Stories that help you Learn</h1>
                <div class="w-1/2 mt-50 flex">
                    <img :src="people" alt="" class="w-2/3 ml-150 mt-150">
                </div>
            </div>
            <div>
                <input type="text" class="h-10 w-1/5 rounded-full text-black">
                <button class="bg-orange-500 text-black h-10 rounded-full px-4 m-15">Subscribe Now</button>
            </div>
            <div class="flex flex-col items-center justify-center">
                <img :src="elements" alt="">
                <p class="text-3xl">Got quality content reading on every topic. Turn your blog reading into a magnificent experience with <span>Blogify</span></p>

            </div>
            
            <hr>
            <div class="flex items-center justify-center">
                <img :src="blogger" alt="">
                <div class="flex items-center justify-around flex-col w-1/3">
                    <span class="text-3xl">Amplify Your voice, Illuminate the World: Blogging made effortless, Start your journey as blogger today with us</span>
                    <button class="bg-orange-500 text-black h-10 rounded-full px-4 m-15">Start Blogging Now</button>
                </div>
            </div>
            <hr>
            <div class="flex justify-center align-center">
                <div class="w-1/4 h-20"><img :src="crypto" alt="" class="h-86"></div>
                <div class="w-1/4 h-20"><img :src="fitness" alt="" class="h-66"></div>
                <div class="w-1/4 h-50"><img :src="politics" alt="" class="h-86"></div>
            </div>
            
            <div class="shadow rounded p-3 mt-5">
                <BlogMyBlogs v-for="blog in blogs" :key="blog.id" :blog="blog"/>
            </div>
            <div class="flex align-center justify-center">
                <button class="bg-orange-500 text-black h-10 rounded-full px-4 m-15 w-1/10">Continue Reading</button>
            </div>
            

        </div>
    </div>
</template>

<script setup>
const { blogs } = useBlogs()
import people from '../assests/images/readers.webp'
import elements from '../assests/images/elements.png'
import blogger from '../assests/images/blogger.png'
import crypto from '../assests/images/crypto.png'
import fitness from '../assests/images/fitness.png'
import politics from '../assests/images/politics.png'
</script>

<style>
</style>

