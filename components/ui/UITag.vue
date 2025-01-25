<template>
  <div class="ui-tag" :style="{ backgroundColor: category?.color }">
    {{ category?.name }}
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useGeneralStore } from "~/stores/useGeneral";
const generalStore = useGeneralStore();
const props = defineProps({
  category: {
    type: String,
    required: true,
  }
});
const category = computed(() => {
  return props.category !== null ? generalStore.categories.find(category => category.id === props.category) : null;
});
</script>
<style scoped>
.ui-tag {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 0;

  @media (min-width: 1024px) {
    margin-left: 8px;
  }
}
</style>
