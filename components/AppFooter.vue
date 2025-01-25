<template>
  <div class="footer flex justify-center lg:justify-end">
    <UiButton label="New task" @click="generalStore.setFormIsOpen(true)">
      <img src="/images/sidebar/Trash.svg" alt="plus" class="w-5 h-5" />
    </UiButton>
  </div>
</template>
<script setup lang="ts">
import { useGeneralStore } from "~/stores/useGeneral";

const generalStore = useGeneralStore();
</script>
