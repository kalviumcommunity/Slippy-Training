<template>
    <div>
        <div class="bg-black text-white flex flex-col items-center justify-center pt-8">
            <div class="w-2/4 h-120 border border-orange-500 flex">
                <div class="w-1/2 flex items-center justify-center p-2">
                    <img :src="user" alt="" class="w-4/5">
                </div>
                <div class="bg-orange-500 w-1/2 h-1/1 flex items-center justify-center flex-col text-black">
                    <h1 class="text-xl font-bold  flex items-center justify-center text-center pb-5">Start Your journey With
                        Blogify today. Stay updated about the latest trends and create impact</h1>
                    <h2>User Name</h2>

                    <input v-model="userNameref" type="text" class="w-4/5 h-6 mb-2 bg-grey-200">
                    <h2>Enter youe Email-Id</h2>


                    <input v-model="userMailref" type="text" class="w-4/5 h-6 mb-2 bg-grey-200">

                    <h2>Enter your Password</h2>
                    <input v-model="userPasswordref" type='password' class="w-4/5 h-6 mb-2">

                    <h2>Confirm your Password</h2>
                    <input v-model="checkUserPasswordref" type='password' class="w-4/5 h-6 mb-3">

                    <button class="rounded-full bg-white px-10 py-2 font-bold" @click="signup">Sign Up</button>
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
</template> -->

<script setup >
import user from '../assests/images/formimage.png'
import github from '../assests/images/github.png'
import linkedin from "../assests/images/linkedIn.png"
import email from "../assests/images/email.png"
import setLocalStorage from '../composables/storage'
definePageMeta({
    middleware: ["auth"]
    // or middleware: 'auth'
})

const userNameref = ref('')
const userPasswordref = ref('')
const userMailref = ref('')
const checkUserPasswordref = ref('')
const passwordMatchError = ref(false);

async function signup() {

    if (
        userNameref.value === '' ||
        userPasswordref.value === '' ||
        userMailref.value === '' ||
        checkUserPasswordref.value === ''
    ) {
        return console.log('One or more fields are empty');
    }



    if (userPasswordref.value !== checkUserPasswordref.value) {
        passwordMatchError.value = true;
        console.log('Passwords do not match')
        return;
    }


    let credntials = {
        email: userMailref.value,
        password: userPasswordref.value,
        username: userNameref.value
    }

    try {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',

            body: JSON.stringify(credntials)
        });

        const data = await response.json();
        console.log(data)
        authorizer(data)
    } catch (error) {
        console.error(error);
    }
    async function authorizer(data) {
        // Save the JWT token to cookies

        document.cookie = `token=${data.token}; path=/;`
        await setLocalStorage(data.data)

        // Redirect to the home page
        if (data.message == 'signedUp' || data.status == 200) {
            window.location.href = '/profile'
        }
    }

}




</script>
