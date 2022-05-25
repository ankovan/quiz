<template>
  <div class="cards-container">
    <router-link :to="{ name: 'quiz', params: { id: '123' } }">
      <card-component :image="'/image/cat.jpg'">
        <h2>Quiz</h2>
      </card-component>
    </router-link>
    <router-link :to="{ name: 'quiz', params: { id: '123' } }">
      <card-component :image="'/image/cat.jpg'">
        <h2>Quiz</h2>
      </card-component>
    </router-link>
    <router-link :to="{ name: 'quiz', params: { id: '123' } }">
      <card-component :image="'/image/cat.jpg'">
        <h2>Quiz</h2>
      </card-component>
    </router-link>
    <router-link :to="{ name: 'quiz', params: { id: '123' } }">
      <card-component :image="'/image/cat.jpg'">
        <h2>Quiz</h2>
      </card-component>
    </router-link>
    <router-link :to="{ name: 'quiz', params: { id: '123' } }">
      <card-component :image="'/image/cat.jpg'">
        <h2>Quiz</h2>
      </card-component>
    </router-link>
  </div>
</template>
<style lang="less">
@import "../styles/variables.less";
body {
  padding: 0;
  margin: 0;
  background-color: @body-color;
}
a {
  text-decoration: none;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // grid: repeat(2, 60px) / auto-flow 80px;
  // grid: repeat(2, 1fr) / auto-flow 1fr;

  grid-gap: 2.5rem;
  padding: 2rem;
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
        height: 13rem;
        object-fit: cover;
      }
    }
  }
}
</style>

<script lang="ts">
import CardComponent from "@/components/CardComponent.vue";

export default {
  components: { CardComponent },
};
</script>
