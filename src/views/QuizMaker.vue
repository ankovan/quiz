<template>
  <!-- <card-component>
    <input placeholder="quiz name" v-model="quiz.name" />
    <input placeholder="quiz image" v-model="quiz.image" />
  </card-component>
  <card-component
    v-for="question in quiz.questions"
    :key="question"
  ></card-component> -->
  <div class="quiz-maker">
    <card-component>
      <label class="custom-image-upload">
        <input
          placeholder="quiz image"
          type="file"
          @change="changeSelectedImage"
        />
        <div class="image-holder-description">
          <p class="plus">+</p>
          <p class="help">Add an image here</p>
        </div>
      </label>
      <div class="name-holder">
        <input placeholder="quiz name" v-model="quiz.name" />
      </div>
    </card-component>
    <div class="carousel-wrapper">
      <div class="add-button-wrapper">
        <button class="quiz-button" @click="addQuestion()">Add question</button>
      </div>
      <carousel :items-to-show="1" :key="quiz.questions.length">
        <slide
          v-for="(question, questionIndex) in quiz.questions"
          :key="question"
        >
          <card-component>
            <label>Question</label>
            <input v-model="question.question" />
            <label>Answers</label>
            <div
              v-for="(answer, index) in question.answers"
              :key="index"
              class="answers"
            >
              <div class="answer-input-group">
                <input
                  type="radio"
                  :name="`question-${questionIndex}-correctAnswer`"
                  :value="index"
                  v-model="question.correctAnswer"
                />
                <input v-model="answer.text" />
              </div>
            </div>
            <button
              @click="
                question.answers?.push({
                  text: '',
                  class: AnswerClasses.ANSWER,
                })
              "
              class="quiz-button"
            >
              Add answer
            </button>
          </card-component>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>

  <!-- <button>ADD QUESTION</button>
  <card-component v-for="question in quiz.questions" :key="question">
    <label class="custom-image-upload">
      <input
        placeholder="quiz image"
        type="file"
        @change="changeSelectedImage"
      />
    </label>
    <input placeholder="quiz name" v-model="quiz.name" />
  </card-component> -->
</template>
<style lang="less">
@import "../styles/variables.less";
@import "../styles/mixins.less";
input {
  width: 100%;
  margin-top: 0.2rem;
  padding: 0.3rem;
  border: none;
  outline: solid rgba(0, 0, 0, 0.2) 0.112rem;
  border-radius: @rounded;
  &:focus {
    outline: solid @button-color-right 0.13rem;
    transition: all 0.1s ease-out;
  }
}
.quiz-maker {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .card {
    width: 30rem;
  }
  .name-holder {
    margin-top: 1rem;
    input {
      text-align: center;
    }
  }
  .custom-image-upload {
    background-color: grey;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    height: 15rem;
    .image-holder-description {
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
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
  }
  .carousel-wrapper {
    width: 31.2rem;
    margin-top: 4rem;
    .add-button-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }
    .quiz-button {
      .button-style();
      &:hover {
        background-color: darken(@button-color, 15%);
      }
    }
    .carousel {
      button {
        transform: none;
        background-color: @button-color-right;
        &.carousel__prev,
        &.carousel__next {
          margin: 1rem 0;
          top: unset;
        }
        &.carousel__pagination-button {
          background-color: lighten(@button-color-right, 15%);
        }
        &.carousel__pagination-button--active {
          background-color: @button-color-right;
        }
      }
      .card {
        width: 100%;
      }
    }
  }
  .carousel__pagination {
    padding: 0 2rem;
    flex-wrap: wrap;
    .carousel__pagination-item {
      &:active {
        color: aqua;
      }
    }
  }
}
</style>
<script lang="ts" setup>
import CardComponent from "@/components/CardComponent.vue";
import { ref, Ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
enum AnswerClasses {
  ANSWER = "answer",
  WRONG = "wrong",
  RIGHT = "right",
}
interface Answer {
  text: string;
  class: AnswerClasses;
}
interface Question {
  question?: string;
  answers?: Array<Answer>;
  correctAnswer?: number;
}
interface Quiz {
  id?: string;
  image?: string;
  name?: string;
  questions: Array<Question>;
}
const quiz: Ref<Quiz> = ref({ questions: [] });
const selectedImage = ref(null);
const changeSelectedImage = (event: any) => {
  quiz.value.image = event.target.files[0]; // TODO: to base64? or use multiform data
};
const addQuestion = () => {
  quiz.value.questions.push({
    question: "",
    answers: [{ text: "", class: AnswerClasses.ANSWER }],
    correctAnswer: 0,
  });
};
const save = () => {
  console.log(quiz);
};
</script>
