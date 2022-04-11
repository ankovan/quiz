<template>
  <div class="quiz-wrapper">
    <div class="quiz">
      <div class="question-card">
        <div class="image-holder">
          <img alt="Vue logo" src="../assets/cat.jpg" />
        </div>
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
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.center-horisontal {
  display: flex;
  justify-content: center;
}
@button-color: rgb(236, 236, 236);
@button-color-right: rgb(88, 143, 88);
@button-color-wrong: rgb(151, 41, 41);
html,
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  background-color: #e8e8e8;
}
.quiz-wrapper {
  width: 100%;
  height: 100%;
  align-items: center;
  .center-horisontal();
  .quiz {
    .center-horisontal();
    .question-card {
      .center-horisontal();
      background-color: white;
      flex-direction: column;
      text-align: center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      width: 30rem;
      .image-holder {
        img {
          width: 100%;
          height: 15rem;
          object-fit: cover;
        }
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
          background-color: rgb(88, 143, 88);
          color: white;
        }
        &.wrong {
          background-color: rgb(151, 41, 41);
          color: white;
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      questions: [
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
      ],
      currentQuestionIndex: 0,
      currentQuestion: {},
      score: 0,
      isEnded: false,
      isDisabled: false,
    };
  },
  mounted() {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  },
  methods: {
    checkAnswer(answerIndex) {
      this.isDisabled = true;
      if (answerIndex == this.currentQuestion.correctAnswer) {
        this.score++;
        this.currentQuestion.answers[answerIndex].class = "right";
      } else {
        this.currentQuestion.answers[answerIndex].class = "wrong";
      }
      setTimeout(() => {
        this.getNextQuestion();
      }, 500);
    },
    getNextQuestion() {
      console.log(this.currentQuestionIndex);
      if (this.questions[this.currentQuestionIndex + 1] == undefined) {
        this.isEnded = true;
      } else {
        this.isDisabled = false;
        this.currentQuestionIndex++;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
      }
    },
  },
};
</script>
