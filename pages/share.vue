<template>
  <MainScaffold>
    <div class="text-snow p-4">
      <h1 class="text-2xl font-semibold">
        Greys Online File Share:
      </h1>
      <br>
      <p>Made with Nuxt and PHP</p>
    </div>
    <div
      id="uploadDiv"
      class="file-upload flex flex-nowrap px-4 text-md select-none"
    >
      <div
        class="file-select flex flex-nowrap min-w-fit rounded-md w-[70vw]"
        @click="openFileSelect"
      >
        <div id="fileName" class="file-select-button">
          Choose File
        </div>
        <div
          class="file-select-name flex flex-nowrap max-w-[40vw] overflow-hidden whitespace-nowrap"
          v-text="fileName"
        />
        <input
          ref="fileInput"
          type="file"
          name="upload-file"
          style="display: none"
          @change="handleFileUpload"
        >
      </div>
      <div class="m-auto" />
      <button
        class="bg-white min-w-[4rem] py-2 px-4 border-black rounded-md text-[#34495e] ml-2"
        @click="uploadFile"
      >
        Upload
      </button>
    </div>
    <div class="shadow-2xl m-4">
      <img
        class="object-cover h-[69vh] object-bottom rounded-lg w-full"
        src="@/assets/images/share-bg.jpg"
      >
    </div>
  </MainScaffold>
</template>

<script>
import MainScaffold from "~/components/MainScaffold.vue";

export default {
  components: { MainScaffold },
  data () {
    return {
      fileName: "No file chosen...",
      file: null
    };
  },
  methods: {
    openFileSelect () {
      this.$refs.fileInput.click();
    },
    handleFileUpload (event) {
      const uploadDiv = document.getElementById("uploadDiv");
      const file = event.target.files[0];
      if (!file || /^\s*$/.test(file.name)) {
        this.fileName = "No file chosen...";
        uploadDiv.classList.remove("active");
        return;
      }
      uploadDiv.classList.add("active");
      this.fileName = file.name;
    },
    uploadFile () {}
  }
};
</script>

<style>
.file-upload {
  font-family: Helvetica, Arial, sans-serif;
}
.file-upload .file-select {
  border: 2px solid #dce4ec;
  color: #34495e;
  cursor: pointer;
  line-height: 40px;
  text-align: left;
  background: #ffffff;
  overflow: hidden;
  position: relative;
}
.file-upload .file-select .file-select-button {
  background: #dce4ec;
  padding: 0 10px;
  display: inline-block;
  line-height: 40px;
}
.file-upload .file-select .file-select-name {
  line-height: 40px;
  padding: 0 10px;
}
.file-upload .file-select:hover {
  border-color: #34495e;
  transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}
.file-upload .file-select:hover .file-select-button {
  background: #34495e;
  color: #ffffff;
  transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}
.file-upload.active .file-select {
  border-color: #3fa46a;
  transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}
.file-upload.active .file-select .file-select-button {
  background: #3fa46a;
  color: #ffffff;
  transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}

.file-upload .file-select.file-select-disabled {
  opacity: 0.65;
}
.file-upload .file-select.file-select-disabled:hover {
  cursor: default;
  display: block;
  border: 2px solid #dce4ec;
  color: #34495e;
  cursor: pointer;
  line-height: 40px;
  margin-top: 5px;
  text-align: left;
  background: #ffffff;
  overflow: hidden;
  position: relative;
}
.file-upload .file-select.file-select-disabled:hover .file-select-button {
  background: #dce4ec;
  color: #666666;
  padding: 0 10px;
  display: inline-block;
  line-height: 40px;
}
.file-upload .file-select.file-select-disabled:hover .file-select-name {
  line-height: 40px;
  display: inline-block;
  padding: 0 10px;
}
</style>
