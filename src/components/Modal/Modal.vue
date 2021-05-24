<template>
  <div
    class="fixed w-full h-full top-0 left-0 bg-black bg-opacity-80 px-4"
    @click.self="close"
  >
    <div class="w-full md:w-3/5 bg-white rounded mx-auto mt-14">
      <div class="flex justify-between border-b">
        <h1 class="px-5 py-3 font-bold text-xl text-gray-700">
          <slot name="title"></slot>
        </h1>
        <button class="px-5 py-3 font-bold text-gray-700" @click="close">
          X
        </button>
      </div>
      <div class="px-6 py-4 text-gray-700">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("closeModal");
    },
  },
};
</script>