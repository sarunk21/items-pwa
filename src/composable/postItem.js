import { ref } from "vue";

const postItem = () => {
  const gambar = ref(null);
  const nama = ref("");
  const harga = ref("");
  const deskripsi = ref("");

  const post = () => {
    let form = new FormData();
    form.append('nama', nama.value);
    form.append('harga', harga.value);
    form.append('gambar', gambar.value.files[0]);
    form.append('deskripsi', deskripsi.value);
    fetch("https://sarunk-items-api.herokuapp.com/api/item", {
      method: 'POST',
      body: form
    })
  }

  return { nama, harga, gambar, deskripsi, post }
}

export default postItem