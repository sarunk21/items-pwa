<template>
  <Modal>
    <template v-slot:title>Tambah Product</template>
    <template v-slot:content>
      <form @submit.prevent="sub">
        <div class="grid grid-flow-row">
          <label>Nama</label>
          <input
            type="text"
            class="p-2 focus:outline-none border-2 rounded-md focus:border-blue-600 mb-3"
            v-model="nama"
          />
          <label>Harga</label>
          <input
            type="number"
            class="p-2 focus:outline-none border-2 rounded-md focus:border-blue-600 mb-3"
            v-model="harga"
          />
          <label>Deskripsi</label>
          <textarea
            class="p-2 focus:outline-none border-2 rounded-md focus:border-blue-600 mb-3"
            v-model="deskripsi"
          ></textarea>
          <label>Nama</label>
          <input
            type="file"
            class="p-2 focus:outline-none border-2 rounded-md focus:border-blue-600 mb-3"
            ref="gambar"
            @change="ya"
          />
          <button class="px-4 py-2 bg-green-400 text-white rounded">
            Submit
          </button>
        </div>
      </form>
    </template>
  </Modal>
</template>

<script>
// Components
import Modal from "./Modal.vue";

import postItem from "../../composable/postItem";

export default {
  name: "CreateModal",
  components: { Modal },
  setup() {
    const { nama, harga, gambar, deskripsi, post } = postItem();

    return { nama, harga, gambar, deskripsi, post };
  },
  methods: {
    close() {
      this.$emit("closeModal");
    },
    sub() {
      this.post();
      this.$emit("closeModal", "post");
    },
  },
};
</script>