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
    <h1 class="card-type">Preview Card</h1>
    <card-component>
      <image-holder-component :url="quiz.image" @change="quiz.image = $event" />
      <div class="name-holder">
        <input class="main-text" placeholder="quiz name" v-model="quiz.name" />
      </div>
      <textarea
        placeholder="Description..."
        v-model="quiz.description"
      ></textarea>
    </card-component>
    <div class="carousel-wrapper">
      <h1 class="card-type">Questions Cards</h1>
      <div class="add-button-wrapper">
        <button class="quiz-button" @click="addQuestion()">Add question</button>
      </div>
      <carousel
        :items-to-show="1"
        :key="quiz.questions.length"
        ref="questionsCarousel"
      >
        <slide
          v-for="(question, questionIndex) in quiz.questions"
          :key="question"
        >
          <card-component>
            <!-- <label class="custom-image-upload">
              <input
                placeholder="quiz image"
                type="file"
                @change="changeSelectedImage"
              />
              <div class="image-holder-description">
                <p class="plus">+</p>
                <p class="help">Add an image here</p>
              </div>
            </label> -->
            <image-holder-component
              :url="question.image"
              @change="question.image = $event"
            />
            <label>Question</label>
            <input class="main-text" v-model="question.question" />
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
              id="add-answer-button"
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
    <button id="save-button" class="quiz-button" @click="saveQuiz">Save</button>
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
.main-text {
  text-align: center;
  font-size: 1.2rem;
}
input,
textarea {
  width: unset;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  padding: 0.3rem;
  border: none;
  outline: solid rgba(0, 0, 0, 0.2) 0.112rem;
  border-radius: @rounded;
  &:focus {
    outline: solid @button-color-right 0.13rem;
    transition: all 0.1s ease-out;
  }
}
textarea {
  margin-top: 1rem;
}
.quiz-maker {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  label {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .card-type {
    .center-horisontal();
    color: @button-color-right;
  }
  .card {
    width: 30rem;
  }
  .quiz-button {
    .button-style();
    &:hover {
      background-color: darken(@button-color, 15%);
    }
  }
  #save-button {
    background-color: @button-color-right;
    color: white;
    margin-bottom: 3rem;
    margin-top: 3rem;
    &:hover {
      background-color: darken(@button-color, 15%);
      color: black;
    }
  }
  .name-holder {
    margin-top: 1rem;
    input {
      text-align: center;
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
    #add-answer-button {
      background-color: darken(@button-color, 10);
      &:hover {
        background-color: darken(@button-color, 15%);
      }
    }
    .carousel {
      .answer-input-group {
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
        input {
          flex-grow: 1;
        }
        input[type="radio"] {
          outline: 0;
          flex-grow: 0;
        }
      }
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
import { ref, Ref, onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ImageHolderComponent from "@/components/ImageHolderComponent.vue";
import axios from "axios";
import { useUserStore } from "@/composables/store/useUserStore";
import { useRoute } from "vue-router";
import { useGuard } from "@/composables/useGuard";
import { Quiz, AnswerClasses } from "@/types/quiz.interfaces";

const store = useUserStore();
const onGuard = useGuard();
const route = useRoute();

const questionsCarousel = ref(null);
const quiz: Ref<Quiz> = ref({ questions: [] });

onMounted(() => {
  if (route.params.id) {
    onGuard(fetchQuiz);
  }
});

const fetchQuiz = async () => {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/api/v1/quiz/${route.params.id}`
    );
    quiz.value = response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const addQuestion = () => {
  quiz.value.questions.push({
    question: "",
    answers: [{ text: "", class: AnswerClasses.ANSWER }],
    correctAnswer: 0,
  });
  setTimeout(() => {
    (questionsCarousel.value! as any).slideTo(quiz.value.questions.length - 1); // eslint-disable-line
  }, 0);
};

const saveQuiz = async () => {
  if (route.params.id) {
    await updateQuiz();
    return;
  }
  try {
    const response = await axios.post(
      `${process.env.VUE_APP_API_URL}/api/v1/quiz`,
      quiz.value,
      { headers: { authorization: `Bearer ${store.token}` } }
    );
  } catch (error) {
    console.log(error);
  }
};
const updateQuiz = async () => {
  try {
    const response = await axios.put(
      `${process.env.VUE_APP_API_URL}/api/v1/quiz/${route.params.id}`,
      quiz.value,
      { headers: { authorization: `Bearer ${store.token}` } }
    );
  } catch (error) {
    console.log(error);
  }
};
</script>
