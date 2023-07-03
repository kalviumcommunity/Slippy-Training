<template>
  <div>
    <h2 class="h-10 flex items-center w-9/12 justify-center text-3xl italic font-bold">Edit with Quill</h2>
  </div>

  <div class="relative">
    <label class="ml-8 mr-3 text-2xl italic font-bold">Title:</label>
    <input type="text" v-model="title" placeholder="Enter the title"
      class="mt-7  w-2/3 mb-8 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />


    <div class="bg-gray-200 h-screen mx-8 mr-96">
      <QuillEditor class="" theme="snow" :toolbar="toolbar" :modules="modules" v-model:content="editorContent"
        content-type="html" />
    </div>

    <div class="absolute bottom-4 right-4 flex flex-col mb-9 mr-16">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2" @click="publish">
        PUBLISH
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2" @click="draft">
        DRAFT
      </button>
      <!-- currently in beta -->
      <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" @click="showContent">
        PREVIEW
      </button> -->
    </div>
  </div>

  <br>
  <div id="content_container" class="ql-container ql-snow">
    <div id="content" class="ql-editor" v-html="contentHTML"></div>
  </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import BlotFormatter from 'quill-blot-formatter'
import ImageUploader from 'quill-image-uploader';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})

const toolbar = [
  [{ header: [1, 2, false] }],
  ['bold', 'italic', 'underline', 'strike', 'underline', 'link'],
  ['image', 'video'],
  ['color', 'script'],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
];

const modules = [
  {
    name: 'blotFormatter',
    module: BlotFormatter,
    options: {/* options */ }
  },
  {
    name: 'imageUploader',
    module: ImageUploader,
    options: {
      upload: file => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            );

            const config = useRuntimeConfig()
          }, 3500);
        });
      }
    }
  }
];

const editorContent = ref("<p>Type in your favorite blogs in here!! 😄😄😄</p>");
const contentHTML = ref("");
const title = ref("")

const publishBody = ref({
  content: editorContent.value,
  title: title,
  isPublished: true
});

const draftBody = ref({
  content: editorContent.value,
  title: title,
  isPublished: false
});

watch(editorContent, () => {
  publishBody.value.content = editorContent.value;
  draftBody.value.content = editorContent.value;
});

async function publish() {

  const token = useCookie('token').value
  const body = {
    publishBody: publishBody.value
  };

  try {
    const response = await fetch('/api/blog/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Add the token to the Authorization header
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    // Process the response data
    if (data) {
      console.log(data);
      // Handle the response accordingly
    }
  } catch (error) {
    console.error(error);
    // Handle the error
  }
}

async function draft() {

  const token = useCookie('token').value
  const body = {
    publishBody: draftBody.value
  };

  try {
    const response = await fetch('/api/blog/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    // Process the response data
    if (data) {
      console.log(data);
      // Handle the response accordingly
    }
  } catch (error) {
    console.error(error);
  }

}

async function showContent() {
  contentHTML.value = editorContent.value;
}
</script>


<style>
#content_container {
  border: none;
}
</style>