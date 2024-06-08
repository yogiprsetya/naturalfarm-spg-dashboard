<template>
  <div class="flex p-4 flex-col gap-4 border border-base-content rounded-lg">
    <h2 class="not-prose text-lg font-bold">Ringkasan Pesanan</h2>

    <div class="grid grid-cols-2 gap-x-6">
      <div class="flex justify-between">
        <span>Total Harga</span>
        <span>{{ formatPrice(totalPrice) }}</span>
      </div>

      <div class="flex justify-between">
        <span>Diskon Produk</span>
        <span class="text-error">{{ formatPrice(totalDiscount) }}</span>
      </div>

      <div class="flex justify-between font-bold border-b">
        <span>Total Bayar</span>
        <span>{{ formatPrice(totalBill) }}</span>
      </div>

      <div class="flex justify-between">
        <span>Diskon Extra</span>
        <span class="text-error">{{ formatPrice(totalExtraDiscount) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ICart } from '~/@types/cart';
import { sum } from '~/utils/sum';
import { formatPrice } from '~/utils/idr';
import { applyDiscount, calcDiscount } from '~/utils/discount';

const props = defineProps<{
  carts: ICart[];
  extraDiscount: number;
}>();

const totalPrice = computed(() => sum(props.carts.map(v => v.price * v.qty)));
const totalDiscount = computed(() => sum(props.carts.map(v => applyDiscount(v.price * v.qty, v.discount))));
const totalInvoice = computed(() => totalPrice.value - totalDiscount.value);
const totalExtraDiscount = computed(() => props.extraDiscount > 0 ? applyDiscount(totalInvoice.value, props.extraDiscount) : 0);
const totalBill = computed(() => totalInvoice.value - totalExtraDiscount.value);
</script>