<template>
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">Pilih metode pembayaran</span>
    </div>

    <select @change="e => emits('onSelect', e.target.value)" class="select select-bordered">
      <option disabled selected>Pilih cara bayar</option>
      <option v-for="item in payments" :key="item.id" :value="item.id">{{ item.name }}</option>
    </select>
  </label>
</template>

<script setup lang="ts">
import payment from '~/contents/master-payment.json';

const payments = payment.sort((a, b) => a.num_index - b.num_index);

const emits = defineEmits(['onSelect'])
</script>