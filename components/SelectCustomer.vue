<template>
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">Pilih pembeli</span>
    </div>

    <select @change="e => emits('onSelect', e.target.value)" class="select select-bordered w-full">
      <option disabled selected>Cari nama pembeli</option>
      <option v-for="item in customers" :key="item.id" :value="item.id">{{ item.customer_name }}</option>
    </select>
  </label>
</template>

<script setup lang="ts">
import customer from '~/contents/master-customer.json';

const customers = customer.data.sort((a, b) => a.customer_name - b.customer_name);

const emits = defineEmits(['onSelect'])
</script>