<template>
  <nav>
    <router-link
      v-for="breadcrumb in crumbs"
      :key="breadcrumb"
      :to="breadcrumb.to"
      >{{ breadcrumb.path }} /
    </router-link>
  </nav>
  <router-view />
</template>

<script>
import { useRoute } from "vue-router";
export default {
  computed: {
    crumbs: () => {
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
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  height: 100%;
}

nav {
  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #5f5f5f;
    }
  }
}
</style>
