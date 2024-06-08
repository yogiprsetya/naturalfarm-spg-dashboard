<script lang="ts" setup>
import SelectCustomer from '~/components/SelectCustomer.vue';
import SelectPayment from '~/components/SelectPayment.vue';
import Cart from '~/components/Cart.vue';
import { ref, reactive } from 'vue';
import type { ICart } from '~/@types/cart';

const cart: ICart[] = reactive([]);
const invDiscount = ref(0);

const addProduct = (product: ICart) => {
  cart.push(product)
}

const removeProduct = (index: number) => {
  cart.splice(index, 1);
}

const updateQty = (index: number, qty: number) => {
  cart[index].qty = qty;
}

const updateDiscount = (index: number, discount: number) => {
  cart[index].discount = discount;
}
</script>

<template>
  <div class="w-full">
    <ProductCatalog :onSelect="addProduct" :selectedList="cart.map(v => v.id)" />
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

      <div class="flex flex-col gap-2">
        <Cart :carts="cart" :onRemoveProduct="removeProduct" :onUpdateQty="updateQty"
          :onUpdateDiscount="updateDiscount" />
      </div>
    </div>
  </div>
</template>