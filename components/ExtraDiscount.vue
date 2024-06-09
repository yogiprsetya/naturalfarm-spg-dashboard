<template>
  <label class="input input-bordered flex items-center gap-2 mt-4">
    <input type="text" class="grow" @keydown="numericOnly" :value="modelValue" @input="updateValue" pattern="[0-9]"
      maxlength="2" title='Max 99%' placeholder="Extra Discount" />
    <span class="badge badge-accent">Extra %</span>
  </label>
</template>

<script setup lang="ts">
import { numericOnly } from '~/utils/numericOnly';

const props = defineProps<{ modelValue: string }>();
const emits = defineEmits(['update:modelValue']);

const updateValue = (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value)
};
</script>