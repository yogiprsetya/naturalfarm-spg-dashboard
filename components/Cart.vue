<template>
  <div v-for="(item, index) in props.carts" :key="item.id"
    class="flex flex-col border-b border-base-content rounded px-2 pb-2 bg-primary-content">
    <div class="flex justify-between items-center py-2">
      <h3 class="not-prose font-bold">{{ item.name }}</h3>

      <div class="flex gap-2">
        <small v-bind:class="{ 'text-accent': item.discount === 0, 'line-through': item.discount > 0 }">{{
          formatPrice(item.price * item.qty) }}</small>

        <small v-bind:class="{ 'hidden': item.discount === 0, 'text-accent': item.discount > 0 }">{{
          formatPrice(calcDiscount(item.price * item.qty, item.discount)) }}</small>
      </div>
    </div>

    <div class="flex justify-between">
      <div class="flex gap-2">
        <label class="input input-bordered flex items-center gap-2 input-sm">
          <input type="text" class="grow w-24" @keydown="numericOnly" @input="e => onChangeDiscount(index, e)"
            :value="item.discount" pattern="[0-9]" maxlength="2" title='Max 99%' placeholder="Discount" />
          <span class="badge">%</span>
        </label>

        <input type="text" placeholder="Quantity" :value="item.qty" readonly
          class="input input-sm w-24 cursor-not-allowed" />

        <div class="flex gap-1">
          <button aria-label="kurangi qty" :disabled="item.qty <= 1" @click="props.onUpdateQty(index, item.qty - 1)"
            class="btn btn-outline btn-square btn-sm">
            <Minus class="h-4 w-4" />
          </button>

          <button aria-label="tambah qty" @click="props.onUpdateQty(index, item.qty + 1)"
            class="btn btn-square btn-primary btn-sm">
            <Plus class="h-4 w-4" />
          </button>
        </div>
      </div>

      <button aria-label="hapus produk" @click="props.onRemoveProduct(index)" class="btn btn-error btn-square btn-sm">
        <Trash class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Minus, Plus, Trash } from 'lucide-vue-next';
import { computed, defineProps } from 'vue';
import type { ICart } from '~/@types/cart';
import { formatPrice } from '~/utils/idr';
import { calcDiscount } from '~/utils/discount';
import { numericOnly } from '~/utils/numericOnly';

const props = defineProps<{
  carts: ICart[];
  onRemoveProduct: (index: number) => void;
  onUpdateQty: (index: number, qty: number) => void;
  onUpdateDiscount: (index: number, discount: number) => void;
}>();

const onChangeDiscount = (index: number, event: Event) => {
  const discount = (event.target as HTMLInputElement).value;
  const isNumeric = !isNaN(parseFloat(discount)) && isFinite(Number(discount));

  if (isNumeric) {
    props.onUpdateDiscount(index, Number(discount));
  }
};
</script>