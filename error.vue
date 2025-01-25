<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

const handleError = () => {
  clearError();
  navigateTo("/");
};
</script>
<template>
  <div class="error-page">
    <h1>{{ error.statusCode }}</h1>
    <div>{{ error.message }}</div>
    <button @click="handleError">Go back home</button>
  </div>
</template>
<style scoped>
.error-page {
  padding: 2rem;
  text-align: center;
}
</style>
