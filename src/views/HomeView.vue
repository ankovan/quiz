<template>
  <div class="cards-container">
    <div class="card">
      <a href="http://localhost:8080/1">
        <div class="image-holder">
          <img alt="Vue logo" src="../assets/cat.jpg" />
        </div>
        <h2>Quiz</h2>
      </a>
    </div>
    <div class="card">
      <a href="http://localhost:8080/1">
        <div class="image-holder">
          <img alt="Vue logo" src="../assets/cat.jpg" />
        </div>
        <h2>Quiz</h2>
      </a>
    </div>
    <div class="card">
      <a href="http://localhost:8080/1">
        <div class="image-holder">
          <img alt="Vue logo" src="../assets/cat.jpg" />
        </div>
        <h2>Quiz</h2>
      </a>
    </div>
    <div class="card">
      <a href="http://localhost:8080/1">
        <div class="image-holder">
          <img alt="Vue logo" src="../assets/cat.jpg" />
        </div>
        <h2>Quiz</h2>
      </a>
    </div>
    <div class="card">
      <a href="http://localhost:8080/1">
        <div class="image-holder">
          <img alt="Vue logo" src="../assets/cat.jpg" />
        </div>
        <h2>Quiz</h2>
      </a>
    </div>
  </div>
</template>
<style lang="less">
body {
  padding: 0;
  margin: 0;
  background-color: #e8e8e8;
}
a {
  text-decoration: none;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
import { defineComponent } from "vue";

export default defineComponent({});
</script>
