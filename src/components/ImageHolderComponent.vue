<template>
  <label class="custom-image-upload">
    <input placeholder="quiz image" type="file" @change="onFileChange" />
    <div v-if="!url" class="image-holder-description">
      <p class="plus">+</p>
      <p class="help">Add an image here</p>
    </div>
    <div v-else id="preview">
      <img :src="url" />
    </div>
  </label>
</template>
<script setup>
import { ref, Ref, defineProps, defineEmits, watch } from "vue";
import axios from "axios";
import { useUserStore } from "@/composables/store/useUserStore";
const store = useUserStore();

const emit = defineEmits(["change"]);
const props = defineProps({
  url: String,
});

const url = ref(props.url);
watch(
  () => props.url,
  (newUrl) => {
    url.value = newUrl;
  }
);

const onFileChange = async (event) => {
  const file = event.target.files[0];
  let formData = new FormData();
  formData.append("image", file);
  const response = await axios.post(
    `${process.env.VUE_APP_API_URL}/api/v1/uploads/`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${store.token}`,
      },
    }
  );
  url.value = `${process.env.VUE_APP_API_URL}${response.data.data.url}`;
  emit("change", url.value);
};
</script>
<style lang="less">
@import "../styles/variables.less";
.custom-image-upload {
  background-color: darken(@body-color, 15%);
  display: inline-block;
  cursor: pointer;
  height: 20rem;
  padding: none;
  .image-holder-description {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    .help {
      margin: 0;
      font-size: 2rem;
    }
    .plus {
      margin: 0;
      font-size: 9rem;
    }
  }
  input[type="file"] {
    display: none;
  }
  #preview {
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
