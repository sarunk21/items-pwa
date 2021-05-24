<template>
  <div class="container mx-auto px-8 py-5 my-3">
    <section id="hero">
      <div class="grid grid-cols-12">
        <div class="mt-8 col-span-12 md:col-span-6 md:mt-0">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800">
            <span class="text-indigo-500">Belanja</span> Untuk <br />
            Semua
          </h1>
          <p class="text-lg md:text-2xl my-4 text-gray-700">
            Menyediakan semua barang keperluan untuk mu
          </p>
          <router-link
            to="/product"
            class="px-4 py-3 inline-block bg-green-400 text-gray-50 text-md md:text-xl rounded-md shadow-lg"
          >
            Produk Kami
          </router-link>
        </div>
        <div class="col-span-12 order-first md:col-span-6 md:order-last">
          <img src="../../assets/bg.png" class="max-h-96 mx-auto" />
        </div>
      </div>
    </section>
    <section id="recomendation">
      <h1 class="text-2xl md:text-4xl my-8 font-bold text-gray-800">
        Rekomendasi Kami
      </h1>
      <div class="grid grid-cols-12 my-6 gap-5">
        <div
          class="col-span-12 md:col-span-3"
          v-for="(item, index) in items"
          :key="item.id"
        >
          <div
            class="container bg-gray-50 border rounded-lg shadow p-5"
            v-if="index <= 3"
          >
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
    </section>
  </div>
</template>

<script>
import postItem from "../../composable/getItems";

export default {
  setup() {
    const { items, load } = postItem();

    load();

    return { items, load };
  },
};
</script>

<style>
</style>