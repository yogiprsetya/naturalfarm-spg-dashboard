<script setup>
import ToggleSidebar from '~/components/ToggleSidebar.vue';
</script>

<template>
  <div class="text-base-content bg-base-100 drawer lg:drawer-open text-base">
    <input id="main-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-side z-30">
      <label for="main-drawer" class="drawer-overlay"></label>

      <aside class="bg-base-100 min-h-screen w-80">
        <div class="px-4 py-3 mb-6">
          <img src="https://naturalfarm.sgp1.digitaloceanspaces.com/images/logo_naturalfarm.svg" width="180px"
            alt="Logo Natural Farm" title="natural farm logo" />
        </div>

        <ul class="menu px-4 py-0">
          <li>
            <a href="/" class="group">Dashboard</a>
          </li>

          <li>
            <a href="/transaction" class="group">Transaction</a>
          </li>
        </ul>
      </aside>
    </div>

    <div class="drawer-content">
      <div class="shadow-lg px-6 py-4 w-full mb-6 flex justify-between items-center">
        <ToggleSidebar />
        Dashboard SPG
      </div>

      <div class="grow px-6 pb-16">
        <slot />
      </div>
    </div>
  </div>
</template>