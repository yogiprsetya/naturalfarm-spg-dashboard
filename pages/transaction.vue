<script setup lang="ts">
import SelectCustomer from '~/components/SelectCustomer.vue';
import SelectPayment from '~/components/SelectPayment.vue';
</script>

<template>
  <div class="w-full">
    <ProductCatalog />
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
      <h2 class="mb-2">Keranjang Belanja</h2>

      <div>
      </div>
    </div>
  </div>
</template>