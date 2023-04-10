<template>
  <MainScaffold>
    <div class="text-snow p-4">
      <h1 class="text-2xl font-semibold">Greys Online File Share:</h1>
      <br />
      <p>Made with Nuxt and PHP</p>
    </div>
    <div id="uploadDiv" class="file-upload block mx-4 h-fit text-md max-w-screen-lg">
      <div class="file-select inline-block w rounded-lg w-[60vw]">
        <div id="fileName" class="file-select-button">Choose File</div>
        <div class="file-select-name" v-text="fileName" />
        <input
          ref="fileInput"
          type="file"
          name="upload-file"
          style="display: none"
          @change="handleFileUpload"
        />
      </div>
      <button class="text-snow ml-2" @click="uploadFile">Upload</button>
    </div>
  </MainScaffold>
</template>

<script>
import MainScaffold from "~/components/MainScaffold.vue";

export default {
  components: { MainScaffold },
  data() {
    return {
      fileName: "No file chosen...",
      file: null,
    };
  },
  methods: {
    openFileSelect() {
      // TODO: Fix fileInput click as it stopped working again for some reason.. :/
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
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
    uploadFile() {},
  },
};
</script>

<style>
.file-upload {
  /* text-align: center; */
  font-family: Helvetica, Arial, sans-serif;
}
.file-upload .file-select {
  /* display: block; */
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
  display: inline-block;
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
