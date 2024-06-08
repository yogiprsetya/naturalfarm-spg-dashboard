<template>
  <label class="input input-bordered flex items-center gap-2 mb-4">
    <input type="text" class="grow" v-model="keyword" placeholder="Cari produk" />

    <Search class="w-5 h-4" />
  </label>

  <div class="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto border-b border-success-content shadow pb-4">
    <div v-for="item in filteredProduct" role="button" @click="selectProduct(item)" :key="item.id"
      class="not-prose p-4 border bg-base-200 shadow border-neutral rounded-lg select-none">
      <h2 class="text-lg font-bold">{{ item.brand }}</h2>
      <p class="truncate">{{ item.name }}</p>
      <small class="text-accent">{{ formatPrice(item.price) }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import product from '~/contents/master-product.json';
import { formatPrice } from '~/utils/idr';
import { ref, computed, defineProps } from 'vue';
import { Search } from 'lucide-vue-next';
import type { Product } from '~/@types/product';
import type { ICart } from '~/@types/cart';

const productItems = ref(product);
const keyword = ref('');

const props = defineProps<{
  onSelect: (cart: ICart) => void;
}>();

const filteredProduct = computed(() => {
  if (!keyword.value) {
    return productItems.value;
  }

  return productItems.value.filter(el => el.name.toLowerCase().includes(keyword.value.toLowerCase()));
});

const selectProduct = (product: Product) => {
  props.onSelect({ ...product, qty: 1, discount: 0 });
}
</script>