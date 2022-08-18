import { defineStore } from "pinia";
import axios from "axios";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      role: "user",
      gender: "other",
      isPremium: false,
      email: "",
      username: "",
      createdAt: "",
      updatedAt: "",
      id: "",
      hasPassword: true,
      token: "",
      refreshToken: window.localStorage.getItem("refreshToken") || "",
      avatar: "",
    };
  },
  actions: {
    async signup(email: string, password: string) {
      const data = await axios.post(
        "http://127.0.0.1:3000/api/v1/auth/signup",
        {
          email: email,
          password: password,
        }
      );
      this.avatar = data.data.data.user.avatar;
      this.role = data.data.data.user.role;
      this.gender = data.data.data.user.gender;
      this.isPremium = data.data.data.user.isPremium;
      this.email = data.data.data.user.email;
      this.username = data.data.data.user.username;
      this.createdAt = data.data.data.user.createdAt;
      this.updatedAt = data.data.data.user.updatedAt;
      this.id = data.data.data.user.id;
      this.hasPassword = data.data.data.user.hasPassword;
      this.token = data.data.data.token;
      this.refreshToken = data.data.data.refreshToken;
      window.localStorage.setItem("refreshToken", this.refreshToken || "");
    },
    async signin(email: string, password: string) {
      const data = await axios.post("http://127.0.0.1:3000/api/v1/auth/login", {
        email: email,
        password: password,
      });
      this.avatar = data.data.data.user.avatar;
      this.role = data.data.data.user.role;
      this.gender = data.data.data.user.gender;
      this.isPremium = data.data.data.user.isPremium;
      this.email = data.data.data.user.email;
      this.username = data.data.data.user.username;
      this.createdAt = data.data.data.user.createdAt;
      this.updatedAt = data.data.data.user.updatedAt;
      this.id = data.data.data.user.id;
      this.hasPassword = data.data.data.user.hasPassword;
      this.token = data.data.data.token;
      this.refreshToken = data.data.data.refreshToken;
      window.localStorage.setItem("refreshToken", this.refreshToken || "");
    },
    async init() {
      const refreshToken = window.localStorage.getItem("refreshToken") || "";
      if (refreshToken !== "") {
        const data = await axios.post(
          "http://127.0.0.1:3000/api/v1/auth/refresh-token",
          {
            refreshToken,
          }
        );
        this.avatar = data.data.data.user.avatar;
        this.role = data.data.data.user.role;
        this.gender = data.data.data.user.gender;
        this.isPremium = data.data.data.user.isPremium;
        this.email = data.data.data.user.email;
        this.username = data.data.data.user.username;
        this.createdAt = data.data.data.user.createdAt;
        this.updatedAt = data.data.data.user.updatedAt;
        this.id = data.data.data.user.id;
        this.hasPassword = data.data.data.user.hasPassword;
        this.token = data.data.data.token;
        this.refreshToken = data.data.data.refreshToken;
        window.localStorage.setItem("refreshToken", this.refreshToken || "");
      }
    },
    async logout() {
      window.localStorage.removeItem("refreshToken");
      this.avatar = "";
      this.role = "user";
      this.gender = "other";
      this.isPremium = false;
      this.email = "";
      this.username = "";
      this.createdAt = "";
      this.updatedAt = "";
      this.id = "";
      this.hasPassword = true;
      this.token = "";
      this.refreshToken = "";
    },
  },
});
