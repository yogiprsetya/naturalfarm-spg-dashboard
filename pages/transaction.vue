<script lang="ts" setup>
import SelectCustomer from '~/components/SelectCustomer.vue';
import SelectPayment from '~/components/SelectPayment.vue';
import Cart from '~/components/Cart.vue';
import { ref, reactive } from 'vue';
import type { ICart } from '~/@types/cart';

const cart: ICart[] = reactive([]);
const extraDiscount = ref(0);

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
    <ProductCatalog :onSelect="addProduct" :selectedList="cart.map(v => v.sku)" />
  </div>

  <div class="flex min-w-full max-md:flex-col-reverse gap-6 prose prose-sm">
    <div class="md:w-6/12 w-full">
      <h2 class="mb-2">Input Pesanan</h2>

      <form class="flex flex-col mb-6">
        <SelectCustomer />
        <SelectPayment />

        <label class="input input-bordered flex items-center gap-2 mt-4">
          <input type="text" class="grow" @keydown="numericOnly" v-model="extraDiscount" pattern="[0-9]" maxlength="2"
            title='Max 99%' placeholder="Extra Discount" />
          <span class="badge badge-accent">Extra %</span>
        </label>

        <button class="btn btn-active btn-primary mt-6">Simpan</button>
      </form>

      <OrderSummary v-if="cart.length" :carts="cart" :extraDiscount="Number(extraDiscount)" />
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