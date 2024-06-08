<script lang="ts" setup>
import SelectCustomer from '~/components/SelectCustomer.vue';
import SelectPayment from '~/components/SelectPayment.vue';
import { ref, reactive } from 'vue';
import type { Product } from '~/@types/product';
import {
  Minus,
  Plus
} from 'lucide-vue-next';

interface Cart extends Product {
  qty: number;
  discount: number;
}

const cart = reactive<Cart[]>([]);
const invDiscount = ref(0);

const addProduct = (product: Cart) => {
  cart.push(product)
}
</script>

<template>
  <div class="w-full">
    <ProductCatalog :onSelect="addProduct" />
  </div>

  <div class="flex min-w-full max-md:flex-col-reverse gap-6 prose prose-sm">
    <div class="md:w-6/12 w-full">
      <h2 class="mb-2">Input Pesanan</h2>

      <form class="flex flex-col gap-4">
        <SelectCustomer />
        <SelectPayment />
      </form>
    </div>

    <div class="md:w-6/12 w-full">
      <h2 class="mb-4">Keranjang Belanja</h2>

      <div v-for="item in cart" :key="item.id"
        class="flex flex-col border-b border-base-content rounded px-2 pb-2 bg-primary-content">
        <h3>{{ item.name }}</h3>

        <div class="flex gap-2">
          <label class="input input-bordered flex items-center gap-2 input-sm">
            <input type="text" class="grow w-24" placeholder="Discount" />
            <span class="badge">%</span>
          </label>

          <input type="text" placeholder="Quantity" class="input input-bordered input-sm w-24" />

          <div class="flex gap-1">
            <button aria-label="kurangi" class="btn btn-error btn-square btn-sm">
              <Minus class="h-4 w-4" />
            </button>

            <button class="btn btn-square btn-primary btn-sm">
              <Plus class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>