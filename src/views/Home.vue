<template>
  <div class="home">
    <Navbar />
    <HomeContent />
  </div>
</template>

<script>
//Components
import Navbar from "../components/Navbar.vue";
import HomeContent from "../components/Content/HomeContent.vue";

export default {
  name: "Home",
  components: { Navbar, HomeContent },
};
</script>
