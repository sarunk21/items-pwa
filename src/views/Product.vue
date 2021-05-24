<template>
  <div>
    <Navbar />
    <ProductContent />
  </div>
</template>

<script>
// Components
import Navbar from "../components/Navbar.vue";
import ProductContent from "../components/Content/ProductContent.vue";

export default {
  name: "Product",
  components: { Navbar, ProductContent },
};
</script>

<style>
</style>