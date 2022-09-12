<template>
  <div class="quiz-wrapper">
    <div class="quiz">
      <!-- <div class="question-card">
        <div class="image-holder">
          <img alt="Vue logo" src="../assets/cat.jpg" />
        </div> -->
      <card-component>
        <template #image>
          <img
            alt="cat"
            :src="isStartCard ? quiz.image : currentQuestion.image"
          />
        </template>
        <template #default>
          <div class="question-wrapper" v-show="!isEnded && !isStartCard">
            <div class="counter">
              {{ currentQuestionIndex + 1 }} / {{ quiz.questions.length }}
            </div>
            <h3 class="question">{{ currentQuestion.question }}</h3>
            <div
              v-for="(answer, index) in currentQuestion.answers"
              class="answers-wrapper"
              :key="answer"
            >
              <label
                @click.prevent="checkAnswer(index)"
                class="answers button"
                :disabled="isDisabled"
                :class="answer.class"
              >
                <input hidden type="radio" name="answer" />
                {{ answer.text }}
              </label>
            </div>
          </div>
          <div v-show="isEnded">
            <p class="score">
              You got {{ score }} / {{ quiz.questions.length }}
            </p>
          </div>
          <div v-show="isStartCard">
            <div class="start-card-content">
              <h2 class="start-card-text">{{ quiz.name }}</h2>
              <p class="start-card-text">{{ quiz.description }}</p>
              <button @click="isStartCard = false">Start</button>
            </div>
          </div>
        </template>
        <!-- </div> -->
      </card-component>
    </div>
  </div>
</template>
<style lang="less">
// .center-horisontal {
//   display: flex;
//   justify-content: center;
// }
// @button-color: rgb(236, 236, 236);
// @button-color-right: rgb(88, 143, 88);
// @button-color-wrong: rgb(151, 41, 41);
@import "../styles/variables.less";
@import "../styles/mixins.less";
html,
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  background-color: @body-color;
}
.quiz-wrapper {
  width: 100%;
  height: calc(100% - 8rem);
  align-items: center;
  .center-horisontal();
  .quiz {
    .center-horisontal();
    .card {
      width: 30rem;
    }
    .question-wrapper {
      padding: 1rem;
    }
    .start-card-content {
      .center-horisontal();
      flex-direction: column;
      button {
        .button-style();
        background-color: @button-color-right;
        color: white;
        &:hover {
          background-color: darken(@button-color, 15%);
          color: black;
        }
      }
      .start-card-text {
        margin: 0;
        margin-bottom: 0.8rem;
      }
    }
    .button {
      background-color: @button-color;
      border-radius: 0.2rem;
      .center-horisontal();
      margin: 0.7rem;
      padding: 0.5rem;
      transition-duration: 0.4s;
      &:hover {
        background-color: darken(@button-color, 10%);
      }
      &.right {
        background-color: @button-color-right;
        color: white;
      }
      &.wrong {
        background-color: @button-color-wrong;
        color: white;
      }
    }
  }
}
</style>
<script setup lang="ts">
import { Ref, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useGuard } from "@/composables/useGuard";
import CardComponent from "@/components/CardComponent.vue";
import { Quiz } from "@/types/quiz.interfaces";
import axios from "axios";
const onGuard = useGuard();
const currentQuestionIndex = ref(0);
const currentQuestion = ref({});
const score = ref(0);
const isEnded = ref(false);
const isDisabled = ref(false);
const route = useRoute();
const quiz: Ref<Quiz> = ref({ questions: [] });
const isStartCard = ref(true);

onMounted(() => {
  fetchQuiz();
});

const checkAnswer = (answerIndex) => {
  isDisabled.value = true;
  if (answerIndex == currentQuestion.value.correctAnswer) {
    score.value++;
    currentQuestion.value.answers[answerIndex].class = "right";
  } else {
    currentQuestion.value.answers[answerIndex].class = "wrong";
  }
  setTimeout(() => {
    getNextQuestion();
  }, 500);
};

const getNextQuestion = () => {
  if (quiz.value.questions[currentQuestionIndex.value + 1] == undefined) {
    isEnded.value = true;
  } else {
    isDisabled.value = false;
    currentQuestionIndex.value++;
    currentQuestion.value = quiz.value.questions[currentQuestionIndex.value];
  }
};
const fetchQuiz = async () => {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/api/v1/quiz/${route.params.id}`
    );
    quiz.value = response.data.data;
    console.log(response.data.data); // TODO: set image
    currentQuestion.value = quiz.value.questions[currentQuestionIndex.value];
  } catch (error) {
    console.log(error);
  }
};
</script>
