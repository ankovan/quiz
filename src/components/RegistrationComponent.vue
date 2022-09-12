<template>
  <div class="user-menu">
    <details v-if="store.refreshToken != ''" @mouseleave="closeMenu" ref="menu">
      <summary class="sign-up-button">
        <div class="user-avatar">
          <img alt="cat" v-if="store.avatar" :src="store.avatar" />
          <img alt="cat" v-else src="/image/cat.jpg" />
        </div>
        <div>{{ store.username }}</div>
      </summary>
      <div class="menu-options">
        <div class="options-item" @click="logOut()">Log out</div>
        <div class="options-item" @click="$router.push('/quizmaker')">
          Make a quiz
        </div>
        <div class="options-item" @click="$router.push('/myquizes')">
          My quizes
        </div>
      </div>
    </details>
    <button v-else @click="isModalOpened = true" class="sign-up-button">
      <i class="fa-solid fa-right-to-bracket icon"></i>
    </button>
    <div v-if="isModalOpened" @click.self="isModalOpened = false" class="modal">
      <div class="modal-content">
        <div class="tabs">
          <div class="tab-menu">
            <button
              :class="{ active: tab == 'signup' }"
              class="tab-main"
              @click="changeTab('signup')"
            >
              Sign up
            </button>
            <button
              :class="{ active: tab == 'signin' }"
              class="tab-main"
              @click="changeTab('signin')"
            >
              Sign in
            </button>
          </div>
          <div class="tab" v-if="tab === 'signup'">
            <div class="form-control">
              <label for="username">Username:</label>
              <input
                v-model="username"
                type="text"
                id="username"
                required
                name="username"
              />
            </div>
            <div class="form-control">
              <label for="email">Email:</label>
              <input
                v-model="email"
                type="text"
                id="email"
                required
                name="email"
              />
            </div>
            <div class="form-control">
              <label for="password">Password:</label>
              <input
                v-model="password"
                type="password"
                id="password"
                name="password"
                minlength="4"
                required
              />
            </div>
            <div class="form-control">
              <label for="confirm-password">Confirm password:</label>
              <input
                v-model="confirmPassword"
                type="password"
                id="confirm-password"
                name="confirm-password"
                minlength="4"
                required
              />
            </div>
            <div v-if="alerterror" class="alert">
              {{ alerterror }}
            </div>
            <div v-if="alerterror" class="alert">
              {{ alerterror.message }}
              <div v-for="error in alerterror.errors" :key="error"></div>
            </div>
            <div class="form-button-wrapper">
              <button @click="signUp()" class="form-button">OK</button>
              <button @click="closeModal()" class="form-button wrong">
                Cancel
              </button>
            </div>
          </div>
          <div class="tab" v-if="tab === 'signin'">
            <div class="form-control">
              <label for="email">Email:</label>
              <input
                v-model="email"
                type="text"
                id="email"
                name="email"
                required
              />
            </div>
            <div class="form-control">
              <label for="password">Password:</label>
              <input
                v-model="password"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <div v-if="alerterror" class="alert">
              {{ alerterror.message }}
              <div v-for="error in alerterror.errors" :key="error"></div>
            </div>
            <div class="form-button-wrapper">
              <button @click="signIn" class="form-button">OK</button>
              <button @click="closeModal()" class="form-button wrong">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useUserStore } from "@/composables/store/useUserStore";
const isModalOpened = ref(false);
const tab = ref("signup");
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const store = useUserStore();
const alerterror = ref("");
const menu = ref(null);

const signUp = async () => {
  if (password.value !== confirmPassword.value) {
    alerterror.value = "Password and comfirm password are not the same.";
    return;
  }
  try {
    await store.signup(email.value, password.value, username.value);
  } catch (error) {
    console.error(error);
    alerterror.value = error.response.data.error;
  }
  if (store.email != "") {
    isModalOpened.value = false;
  }
};

const signIn = async () => {
  try {
    await store.signin(email.value, password.value);
  } catch (error) {
    console.error(error);
    alerterror.value = error.response.data.error;
  }
  if (store.email != "") {
    isModalOpened.value = false;
  }
};
const logOut = async () => {
  try {
    await store.logout();
  } catch (error) {
    console.error(error);
  }
};
const closeModal = () => {
  isModalOpened.value = false;
  clearInputs();
};
const closeMenu = (event) => {
  // eslint-disable-next-line vue/no-ref-as-operand
  event.target.removeAttribute("open");
};
const clearInputs = () => {
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
  alerterror.value = "";
};
const changeTab = (tabname) => {
  tab.value = tabname;
  clearInputs();
};
</script>
<style lang="less">
@import "../styles/variables.less";
@import "../styles/mixins.less";
details > summary {
  list-style: none;
  cursor: pointer;
}
.user-menu {
  details {
    position: relative;
    .menu-options {
      position: absolute;
      right: 0;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      z-index: 1;
      border-radius: @rounded;
      width: 100%;
      .options-item {
        .button-style();
        padding: 1rem;
        background-color: white;
        cursor: pointer;
        margin-top: 0.5rem;
        &:hover {
          background-color: @body-color;
        }
      }
    }
  }
}
.sign-up-button {
  .button-style();
  padding: 0.6rem;
  border-radius: @rounded;
  display: flex;
  align-items: center;
  // &:hover {
  //   background-color: @button-color-right;
  //   color: white;
  // }
  .icon {
    font-size: 1.2rem;
  }
  .user-avatar img {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    margin-right: 0.2rem;
  }
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  .modal-content {
    background-color: white;
    margin: 15% auto;
    padding: 0.8rem;
    border: none;
    border-radius: @rounded;
    width: 20%;
    .active {
      background-color: @button-color-right;
      color: white;
    }
    .tab-main {
      width: 50%;
      padding: 0.8rem;
      border: 0;
      border-radius: @rounded;
      font-size: 1.05rem;
    }
    .tab {
      .form-button-wrapper {
        display: flex;
        justify-content: space-evenly;
        margin-top: 0.3rem;
        .form-button {
          .button-style();
          background-color: @button-color-right;
          color: white;
          &:hover {
            background-color: darken(@button-color, 15%);
            color: black;
          }
          &.wrong {
            background-color: @button-color-wrong;
            &:hover {
              background-color: darken(@button-color, 15%);
              color: black;
            }
          }
        }
      }
    }
    .form-control {
      padding: 0.6rem;
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
    }
  }
}
</style>
