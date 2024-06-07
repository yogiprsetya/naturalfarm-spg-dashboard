<template>
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">Pilih pembeli</span>
    </div>

    <select class="select select-bordered w-full">
      <option disabled selected>Cari nama pembeli</option>
      <option v-for="item in customer" :key="item.id" value={{ item.id }}>{{ item.customer_name }}</option>
    </select>
  </label>
</template>

<script>
import customer from '~/contents/master-customer.json';

export default {
  name: 'SelectCustomer',
  data() {
    return { customer: customer.data.sort((a, b) => a.customer_name - b.customer_name) }
  },
}
</script>