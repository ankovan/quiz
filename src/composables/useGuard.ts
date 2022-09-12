import { watch } from "vue";
import router from "@/router";
import { useUserStore } from "@/composables/store/useUserStore";

export function useGuard() {
  const store = useUserStore();
  return (func: (...args: any[]) => void) => {
    if (!store.refreshToken) {
      router.push({ name: "home" });
      return;
    }
    if (store.token) {
      func();
      return;
    }
    watch(
      () => store.token,
      (token) => (token ? func() : router.push({ name: "home" }))
    );
  };
}
