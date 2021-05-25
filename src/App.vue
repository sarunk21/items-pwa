<template>
  <Offline v-if="offline" />
  <router-view />
</template>

<script>
import { ref } from "vue";
import Offline from "./components/Offline.vue";

export default {
  setup() {
    const offline = ref(false);

    window.addEventListener("offline", () => {
      offline.value = true;
    });
    window.addEventListener("online", () => {
      offline.value = false;
    });

    return { offline };
  },
  components: { Offline },
};
</script>