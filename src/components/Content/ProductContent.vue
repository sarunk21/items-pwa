<template>
  <div class="container mx-auto px-8 py-5 my-3">
    <button
      @click="toggleModal"
      class="px-4 py-2 inline-block bg-green-400 text-gray-50 rounded-md shadow-lg"
    >
      Tambah Produk
    </button>
    <div class="grid grid-cols-12 my-6 gap-5">
      <div
        class="col-span-12 md:col-span-3"
        v-for="item in items"
        :key="item.id"
      >
        <div class="container bg-gray-50 border rounded-lg shadow p-5">
          <img
            :src="`https://sarunk-items-api.herokuapp.com/storage/img/${item.gambar}`"
            :alt="item.nama"
            class="max-h-40 mx-auto"
          />
          <div class="my-3">
            <h1 class="truncate text-gray-700">{{ item.nama }}</h1>
            <p class="font-bold">Rp. {{ item.harga.toLocaleString() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CreateModal v-if="modal" @closeModal="toggleModal" />
</template>

<script>
// Components
import CreateModal from "../Modal/CreateModal.vue";
import postItem from "../../composable/getItems";

export default {
  components: { CreateModal },
  setup() {
    const { items, load } = postItem();

    load();

    return { items, load };
  },
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    toggleModal() {
      this.modal = !this.modal;
    },
  },
};
</script>

<style>
</style>