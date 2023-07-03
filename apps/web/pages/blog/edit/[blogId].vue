<template>
  <div>
    <h2
      class="h-10 flex items-center w-9/12 justify-center text-3xl italic font-bold"
    >
      Edit with Quill
    </h2>
  </div>

  <div class="relative">
    <label class="ml-8 mr-3 text-2xl italic font-bold">Title:</label>
    <input
      type="text"
      v-model="title"
      placeholder="Enter the title"
      class="mt-7 w-2/3 mb-8 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />

    <div class="bg-gray-200 h-screen mx-8 mr-96">
      <QuillEditor
        class=""
        theme="snow"
        :toolbar="toolbar"
        :modules="modules"
        v-model:content="editorContent"
        content-type="html"
      />
    </div>

    <div class="absolute bottom-4 right-4 flex flex-col mb-9 mr-16">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2"
        @click="update"
      >
        Update
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2"
        @click="draft"
      >
        DRAFT
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        @click="showContent"
      >
        PREVIEW
      </button>
    </div>
  </div>

  <br />
  <div id="content_container" class="ql-container ql-snow">
    <div id="content" class="ql-editor" v-html="contentHTML"></div>
  </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";
import ImageUploader from "quill-image-uploader";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "quill-image-uploader/dist/quill.imageUploader.min.css";

const toolbar = [
  [{ header: [1, 2, false] }],
  ["bold", "italic", "underline", "strike", "underline", "link"],
  ["image", "video"],
  ["color", "script"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
];

const modules = [
  {
    name: "blotFormatter",
    module: BlotFormatter,
    options: {
      /* options */
    },
  },
  {
    name: "imageUploader",
    module: ImageUploader,
    options: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            );

            const config = useRuntimeConfig();
          }, 3500);
        });
      },
    },
  },
];
const route = useRoute();
const { data: res } = await useFetch(`/api/blog/${route.params.blogId}`);
const editorContent = ref(res._rawValue.content);
// const contentHTML = ref(res._rawValue.content);
console.log(res._rawValue);
const title = ref(res._rawValue.title);

const updateBody = ref({
  content: editorContent.value,
  title: title,
  isPublished: true,
});

const draftBody = ref({
  content: editorContent.value,
  title: title,
  isPublished: false,
});

watch(editorContent, () => {
  updateBody.value.content = editorContent.value;
  draftBody.value.content = editorContent.value;
});

async function update() {
  try {
    const { data: response } = await useFetch(
      `/api/blog/edit/${route.params.blogId}`,
      {
        method: "PATCH",
        body: updateBody.value,
      }
    );
    if (response) {
      // console.log(response);
      alert("Blog Updated!!");
      navigateTo("/blogs");
      return;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error appropriately (e.g., show an error message to the user)
  }
}
async function draft() {
  const { data: response } = await useFetch(
    `/api/blog/edit/${route.params.blogId}`,
    {
      method: "PATCH",
      body: draftBody.value,
    }
  );
  if (response) {
    alert("Blog Drafted!!");
    navigateTo("/blogs");
    return;
  }
}

async function showContent() {
  console.log(editorContent.value);
  contentHTML.value = editorContent.value;
}
</script>


<style>
#content_container {
  border: none;
}
</style>