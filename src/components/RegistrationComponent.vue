<template>
  <div>
    <button @click="isModalOpened = true" class="sign-up-button">
      <i class="fa-solid fa-right-to-bracket icon"></i>
    </button>
    <div v-if="isModalOpened" @click.self="isModalOpened = false" class="modal">
      <div class="modal-content">
        <div class="tabs">
          <div class="tab-menu">
            <button
              :class="{ active: tab == 'signup' }"
              class="tab-main"
              @click="tab = 'signup'"
            >
              Sign up
            </button>
            <button
              :class="{ active: tab == 'signin' }"
              class="tab-main"
              @click="tab = 'signin'"
            >
              Sign in
            </button>
          </div>
          <div class="tab" v-if="tab === 'signup'">
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
            <div class="form-button-wrapper">
              <button @click="signUp()" class="form-button">OK</button>
              <button class="form-button wrong">Cancel</button>
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
            <div class="form-button-wrapper">
              <button class="form-button">OK</button>
              <button class="form-button wrong">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isModalOpened: false,
      tab: "signup",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async signUp() {
      if (this.password !== this.confirmPassword) {
        return;
      }
      const data = await this.axios.post(
        "http://127.0.0.1:3000/api/v1/auth/signup",
        {
          email: this.email,
          password: this.password,
        }
      );
      console.log(data);
    },
  },
};
</script>
<style lang="less">
@import "../styles/variables.less";
@import "../styles/mixins.less";
.sign-up-button {
  .button-style();
  &:hover {
    background-color: @button-color-right;
    color: white;
  }
  .icon {
    font-size: 1.2rem;
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
    background-color: @body-color;
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
          &:hover {
            background-color: @button-color-right;
            color: white;
          }
          &.wrong:hover {
            background-color: @button-color-wrong;
            color: white;
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
          outline: solid @button-color-right 0.119rem;
        }
      }
    }
  }
}
</style>
