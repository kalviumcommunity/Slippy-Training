<template>
    <div>
        <h2 class="h-10 flex items-center justify-center">Edit with Quill</h2>
    </div>

    <div class="relative">
        <div class="bg-gray-200 h-screen mx-8 mr-96">
            <QuillEditor class="" theme="snow" :toolbar="toolbar" :modules="modules" v-model:content="editorContent"
                content-type="html" />
        </div>
        <div class="absolute bottom-4 right-4 flex flex-col mb-9 mr-16">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2">PUBLISH</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2">DRAFT/SAVE</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                @click="showContent">PREVIEW</button>
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

const toolbar = [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'underline', 'link'],
    ['image', 'video',],
    ['color', 'script',]
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

                    }, 3500);
                });
            }
        }
    }
];

const editorContent = ref("<p>Type in your favorite blogs in here!! 😄😄😄</p>");
const contentHTML = ref("");

function showContent() {
    contentHTML.value = editorContent.value;
}

</script>

<style>
#content_container {
    border: none;
}
</style>