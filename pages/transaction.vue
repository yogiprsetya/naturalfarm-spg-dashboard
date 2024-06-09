<template>
  <div class="w-full">
    <ProductCatalog :onSelect="addProduct" :selectedList="cart.map(v => v.sku)" />
  </div>

  <div class="flex min-w-full max-md:flex-col-reverse gap-6 prose prose-sm">
    <div class="md:w-6/12 w-full">
      <h2 class="mb-2">Input Pesanan</h2>

      <div class="flex flex-col mb-6">
        <SelectCustomer @onSelect="handleCustomerSelect" />
        <SelectPayment @onSelect="handlePaymentSelect" />
        <ExtraDiscount v-model="extraDiscount" />

        <button :disabled="disabledSubmit" @click="createInvoice"
          class="btn btn-active btn-primary mt-6">Simpan</button>
      </div>

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

<script lang="ts" setup>
import SelectCustomer from '~/components/SelectCustomer.vue';
import SelectPayment from '~/components/SelectPayment.vue';
import Cart from '~/components/Cart.vue';
import { ref, reactive } from 'vue';
import type { ICart } from '~/@types/cart';

const cart = reactive<ICart[]>([]);
const extraDiscount = ref<string>('');
const customerId = ref<number>(0);
const paymentId = ref<number>(0);

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

const handleCustomerSelect = (d: string) => {
  customerId.value = Number(d);
}

const handlePaymentSelect = (d: string) => {
  paymentId.value = Number(d);
}

const disabledSubmit = computed(() => {
  return !cart.length || !customerId.value || !paymentId.value;
})

const createInvoice = () => {
  console.log({
    extraDiscount: extraDiscount.value || 0,
    customerId: customerId.value,
    paymentId: paymentId.value,
    cart: toRaw(cart),
  });
}
</script>