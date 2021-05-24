import { ref } from "vue";

const getItems = () => {
  const items = ref([]);

  const load = async () => {
    const data = await fetch("https://sarunk-api.000webhostapp.com/api/item");
    items.value = await data.json();
  }

  return { items, load }
}

export default getItems