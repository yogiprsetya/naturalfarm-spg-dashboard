<template>
  <label class="input input-bordered flex items-center gap-2 mb-4">
    <input type="text" class="grow" v-model="keyword" placeholder="Cari produk" />

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
      <path fill-rule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clip-rule="evenodd" />
    </svg>
  </label>

  <div class="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto border-b border-success-content shadow pb-4">
    <div v-for="item in filteredProduct" role="button"
      class="not-prose p-4 border bg-base-200 shadow border-neutral rounded-lg">
      <h2 class="text-lg font-bold">{{ item.brand }}</h2>
      <p class="truncate">{{ item.name }}</p>
      <small class="text-accent">{{ formatPrice(item.price) }}</small>
    </div>
  </div>
</template>

<script>
import product from '~/contents/master-product.json';
import { formatPrice } from '~/utils/idr';
import { ref, computed } from 'vue';

export default {
  name: 'ProductCatalog',
  setup() {
    const productItems = ref(product);
    const keyword = ref('');

    const filteredProduct = computed(() => {
      if (!keyword.value) {
        return productItems.value;
      }

      return productItems.value.filter(el => el.name.toLowerCase().includes(keyword.value.toLowerCase()));
    });

    return {
      keyword,
      filteredProduct
    };
  }
}
</script>