<template>
  <div class="quiz-wrapper">
    <div class="quiz">
      <!-- <div class="question-card">
        <div class="image-holder">
          <img alt="Vue logo" src="../assets/cat.jpg" />
        </div> -->
      <card-component>
        <template #image>
          <img alt="cat" :src="'/image/cat.jpg'" />
        </template>
        <template #default>
          <div class="question-wrapper" v-show="!isEnded">
            <div class="counter">
              {{ currentQuestionIndex + 1 }} / {{ questions.length }}
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
            <p class="score">You got {{ score }} / {{ questions.length }}</p>
          </div></template
        >
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
<script setup>
import { ref, onMounted } from "vue";
import CardComponent from "@/components/CardComponent.vue";
const questions = [
  {
    question: "What is Vue.js?",
    answers: [
      {
        text: "Programming language",
        class: "answer",
      },
      { text: "Framework", class: "answer" },
    ],
    correctAnswer: 1,
  },
  {
    question: "What color is Vue.js logo?",
    answers: [
      { text: "Green", class: "answer" },
      { text: "Blue", class: "answer" },
    ],
    correctAnswer: 0,
  },
];
const currentQuestionIndex = ref(0);
const currentQuestion = ref({});
const score = ref(0);
const isEnded = ref(false);
const isDisabled = ref(false);

onMounted(() => {
  currentQuestion.value = questions[currentQuestionIndex.value];
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
  if (questions[currentQuestionIndex.value + 1] == undefined) {
    isEnded.value = true;
  } else {
    isDisabled.value = false;
    currentQuestionIndex.value++;
    currentQuestion.value = questions[currentQuestionIndex.value];
  }
};
</script>
