<template>
  <div class="welcome">
    <h1>Welcome to Quizer!</h1>
    <p>Here you can take quizes and make your own.</p>
  </div>
  <div class="cards-container">
    <router-link
      v-for="quiz in quizes"
      :key="quiz._id"
      :to="{
        name: 'editmyquiz',
        params: { id: quiz._id },
      }"
    >
      <card-component>
        <template #image>
          <img alt="image" :src="quiz.image" />
        </template>
        <template #default>
          <h2>{{ quiz.name }}</h2>
          <p class="description">{{ quiz.description }}</p>
        </template>
      </card-component>
    </router-link>
  </div>
</template>
<style lang="less">
@import "../styles/variables.less";
@import "../styles/mixins.less";
body {
  padding: 0;
  margin: 0;
  background-color: @body-color;
}
.welcome {
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    color: @button-color-right;
  }
  p {
    font-size: 1.2rem;
  }
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // grid: repeat(2, 60px) / auto-flow 80px;
  // grid: repeat(2, 1fr) / auto-flow 1fr;

  grid-gap: 2.5rem;
  padding: 2rem;
  a {
    text-decoration: none;
    color: black;
  }
  .description {
    margin: 0;
  }
  .card {
    text-align: center;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      transform: scale(1.04);
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      transition: all 0.4s ease;
    }
    .image-holder {
      img {
        width: 100%;
        height: 15rem;
        object-fit: cover;
      }
    }
  }
}
</style>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useUserStore } from "@/composables/store/useUserStore";
import { useGuard } from "@/composables/useGuard";
import CardComponent from "@/components/CardComponent.vue";

const store = useUserStore();
const onGuard = useGuard();
const quizes = ref([]);
const total = ref(0);
const limit = ref(25);
const page = ref(1);
const pages = ref(1);

onMounted(() => {
  onGuard(fetchQuizes);
});

const fetchQuizes = async () => {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/api/v1/quiz/myquizes`,
      { headers: { authorization: `Bearer ${store.token}` } }
    );
    quizes.value = response.data.data;
    total.value = response.data.total;
    pages.value = response.data.pages;
  } catch (error) {
    console.log(error);
  }
};
</script>
