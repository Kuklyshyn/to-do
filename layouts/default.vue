<template>
  <div class="p-5 lg:p-6 layout">
    <AppLoader />
    <AppSidebar :categories="data.data" />
    <div class="content">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
<script setup>
const { $apiFetch } = useNuxtApp();
const { data, status, error, refresh, clear } = useAsyncData("categories", () =>
  $apiFetch("https://todo.nextio.dev/items/categories")
);
</script>
