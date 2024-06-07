<template>
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">Pilih metode pembayaran</span>
    </div>

    <select class="select select-bordered">
      <option disabled selected>Pilih cara bayar</option>
      <option v-for="item in payment" :key="item.id" value={{ item.id }}>{{ item.name }}</option>
    </select>
  </label>
</template>

<script>
import payment from '~/contents/master-payment.json';

export default {
  name: 'SelectPayment',
  data() {
    return { payment }
  },
}
</script>