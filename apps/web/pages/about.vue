<template>
    <div class="bg-orange-500 flex items-center justify-center">
        <img :src="aboutimage" alt="" class="py-10 pl-10 flex">
        <div class="flex items-center justify-center flex-col pt-20">
            <h1 class="w-3/4 font-bold text-l">Blogify, a blog application that unleashes the writer within. With its sleek design and intuitive interface, Blogify transforms the art of blogging into an exhilarating experience. Customize your blog with captivating themes, effortlessly blending style and substance. Dive into the distraction-free writing environment, where words flow freely and ideas take flight. Seamlessly integrate stunning visuals with the built-in image editor, captivating your readers' senses.</h1>
            <h1 class="text-xl p-5 font-bold">Creators</h1>

            <div class="flex justigy-center items-center">
                <div class="flex justigy-center items-center flex-col font-bold text-white">
                    <img :src="profileimg" alt="" class="h-56">
                    <h1>Priyanshi Rana</h1>
                </div>
                <div class="flex justigy-center items-center flex-col font-bold text-white">
                        <img :src="profileimg" alt="" class="h-56">
                        <h1>Balaji S</h1>
                </div>
                <div class="flex justigy-center items-center flex-col font-bold text-white">
                        <img :src="profileimg" alt="" class="h-56">
                        <h1>Arpit Gulati</h1>
                </div>



            </div>

            
        </div>
        
    </div>
</template>

<script setup >
import aboutimage from '../assests/images/aboutimage.png'
import profileimg from '../assests/images/profileavatar.png'

</script>

