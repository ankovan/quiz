<template>
  <nav>
    <div>
      <router-link
        v-for="breadcrumb in crumbs"
        :key="breadcrumb"
        :to="breadcrumb.to"
        >{{ breadcrumb.path }} /
      </router-link>
    </div>
    <registration-component />
  </nav>
  <router-view />
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, onBeforeMount } from "vue";
import { useUserStore } from "@/composables/store/useUserStore";
import RegistrationComponent from "@/components/RegistrationComponent.vue";

onBeforeMount(async () => {
  const store = useUserStore();
  try {
    await store.init();
  } catch (error) {
    console.error(error);
  }
});

const crumbs = computed(() => {
  const route = useRoute();
  let pathArray = route.path.split("/");
  pathArray.shift();
  let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
    if (path) {
      breadcrumbArray.push({
        path: path,
        to: breadcrumbArray[idx - 1]
          ? "/" + breadcrumbArray[idx - 1].path + "/" + path
          : "/" + path,
      });
    }
    return breadcrumbArray;
  }, []);
  return [{ path: "home", to: "/" }, ...breadcrumbs];
});
</script>

<style lang="less">
@import "styles/variables.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  height: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #5f5f5f;
    }
  }
}
</style>
